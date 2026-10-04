import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";
import { config, MAX_OUTPUT_TOKENS } from "./config";
import { SYSTEM_PROMPT } from "./prompt";
import type { ChatMessage } from "./validate";

// Region comes from AWS_REGION, which Lambda sets.
const bedrock = new BedrockRuntimeClient({});

// The Converse API keeps this model-agnostic: switching between Claude and Nova
// only takes a change to BEDROCK_MODEL_ID.
export const generateReply = async (messages: ChatMessage[]): Promise<string> => {
  const response = await bedrock.send(
    new ConverseCommand({
      modelId: config.bedrockModelId,
      system: [{ text: SYSTEM_PROMPT }],
      messages: messages.map((message) => ({ role: message.role, content: [{ text: message.text }] })),
      inferenceConfig: { maxTokens: MAX_OUTPUT_TOKENS, temperature: 0.3 },
    }),
  );

  return (response.output?.message?.content ?? [])
    .map((block) => block.text ?? "")
    .join("")
    .trim();
};
