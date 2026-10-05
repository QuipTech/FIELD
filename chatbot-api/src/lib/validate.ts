import { HISTORY_LIMIT, MAX_USER_MESSAGE_LENGTH } from "./config";

export type ChatMessage = { role: "user" | "assistant"; text: string };

type Result<T> = { ok: true; value: T } | { ok: false; error: string };

const MAX_ASSISTANT_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES = 50;
// Control characters (other than tab and newline) have no place in chat text or email fields.
const CONTROL_CHARS = /[\u0000-\u0008\u000b-\u001f\u007f]/;
const SINGLE_LINE_CONTROL_CHARS = /[\u0000-\u001f\u007f]/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const parseMessages = (input: unknown): Result<ChatMessage[]> => {
  if (!Array.isArray(input) || input.length === 0 || input.length > MAX_MESSAGES) {
    return { ok: false, error: "invalid_messages" };
  }

  const messages: ChatMessage[] = [];
  for (const item of input) {
    const { role, text } = (item ?? {}) as Record<string, unknown>;
    if ((role !== "user" && role !== "assistant") || typeof text !== "string") {
      return { ok: false, error: "invalid_messages" };
    }
    const trimmed = text.trim();
    const maxLength = role === "user" ? MAX_USER_MESSAGE_LENGTH : MAX_ASSISTANT_MESSAGE_LENGTH;
    if (!trimmed) return { ok: false, error: "invalid_messages" };
    if (trimmed.length > maxLength) return { ok: false, error: "message_too_long" };
    if (CONTROL_CHARS.test(trimmed)) return { ok: false, error: "invalid_messages" };
    messages.push({ role, text: trimmed });
  }
  return { ok: true, value: messages };
};

// Keeps the last HISTORY_LIMIT messages, shaped the way Gemini expects:
// starts with a user turn, roles alternate, and ends with the new user message.
export const parseChatHistory = (input: unknown): Result<ChatMessage[]> => {
  const parsed = parseMessages(input);
  if (!parsed.ok) return parsed;
  if (parsed.value[parsed.value.length - 1].role !== "user") return { ok: false, error: "invalid_messages" };

  const recent = parsed.value.slice(-HISTORY_LIMIT);
  while (recent[0].role !== "user") recent.shift();

  const history: ChatMessage[] = [];
  for (const message of recent) {
    const previous = history[history.length - 1];
    if (previous?.role === message.role) {
      previous.text = `${previous.text}\n\n${message.text}`;
    } else {
      history.push({ ...message });
    }
  }
  return { ok: true, value: history };
};

export type Lead = {
  name: string;
  email: string;
  company: string;
  message: string;
  transcript: ChatMessage[];
};

const field = (value: unknown, maxLength: number, isRequired: boolean, multiline = false): string | null => {
  if (value === undefined || value === null) return isRequired ? null : "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (isRequired && !trimmed) return null;
  if (trimmed.length > maxLength) return null;
  if ((multiline ? CONTROL_CHARS : SINGLE_LINE_CONTROL_CHARS).test(trimmed)) return null;
  return trimmed;
};

export const parseLead = (input: Record<string, unknown>): Result<Lead> => {
  const name = field(input.name, 100, true);
  const email = field(input.email, 254, true);
  const company = field(input.company, 150, true);
  const message = field(input.message, 1000, false, true);
  if (name === null || company === null || message === null) return { ok: false, error: "invalid_lead" };
  if (email === null || !EMAIL_PATTERN.test(email)) return { ok: false, error: "invalid_email" };

  let transcript: ChatMessage[] = [];
  if (Array.isArray(input.transcript) && input.transcript.length > 0) {
    const parsed = parseMessages(input.transcript);
    if (!parsed.ok) return { ok: false, error: "invalid_transcript" };
    transcript = parsed.value;
  }

  return { ok: true, value: { name, email, company, message, transcript } };
};
