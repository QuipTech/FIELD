import { config, MAX_OUTPUT_TOKENS } from "./config";
import { SYSTEM_PROMPT } from "./prompt";
import type { ChatMessage } from "./validate";

const INTERACTIONS_URL = "https://generativelanguage.googleapis.com/v1beta/interactions";
const TIMEOUT_MS = 8_000;

type ContentBlock = { type?: string; text?: string };
type Step = { type?: string; content?: ContentBlock[] };
type InteractionResponse = { status?: string; steps?: Step[] };

class GeminiError extends Error {
  constructor(
    readonly status: number,
    body: string,
  ) {
    super(`Gemini request failed: ${status} ${body}`);
  }
}

// Busy or overloaded responses, worth one retry on the fallback model.
const isRetryable = (error: unknown) =>
  error instanceof GeminiError ? [429, 500, 503].includes(error.status) : error instanceof Error && error.name === "TimeoutError";

// Calls the Gemini Interactions API statelessly (store: false), sending the recent
// history as a step list. Only text from model_output steps is returned: thoughts,
// images or any other content types are dropped, so the widget only ever gets text.
const requestReply = async (model: string, messages: ChatMessage[]): Promise<string> => {
  const response = await fetch(INTERACTIONS_URL, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": config.geminiApiKey },
    body: JSON.stringify({
      model,
      system_instruction: SYSTEM_PROMPT,
      input: messages.map((message) => ({
        type: message.role === "assistant" ? "model_output" : "user_input",
        content: [{ type: "text", text: message.text }],
      })),
      generation_config: { max_output_tokens: MAX_OUTPUT_TOKENS, temperature: 0.3, thinking_level: "low" },
      store: false,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!response.ok) throw new GeminiError(response.status, await response.text().catch(() => ""));

  const data = (await response.json()) as InteractionResponse;
  const text = (data.steps ?? [])
    .filter((step) => step.type === "model_output")
    .flatMap((step) => step.content ?? [])
    .filter((block) => block.type === "text" && typeof block.text === "string")
    .map((block) => block.text)
    .join("")
    .trim();

  // "incomplete" means the token cap was hit mid-reply: keep only the complete sentences.
  if (data.status !== "incomplete") return text;
  const lastSentenceEnd = Math.max(text.lastIndexOf(". "), text.lastIndexOf("? "), text.lastIndexOf("! "));
  return /[.?!]$/.test(text) ? text : lastSentenceEnd > 0 ? text.slice(0, lastSentenceEnd + 1) : "";
};

export const generateReply = async (messages: ChatMessage[]): Promise<string> => {
  try {
    return await requestReply(config.geminiModel, messages);
  } catch (error) {
    if (!isRetryable(error) || config.geminiFallbackModel === config.geminiModel) throw error;
    console.warn(`${config.geminiModel} unavailable, retrying with ${config.geminiFallbackModel}`, error);
    return requestReply(config.geminiFallbackModel, messages);
  }
};
