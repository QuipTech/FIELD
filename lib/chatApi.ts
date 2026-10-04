export type ChatApiMessage = {
  role: "user" | "assistant";
  text: string;
};

export type ChatAuth = {
  sessionToken?: string;
  turnstileToken?: string;
};

export type LeadDetails = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ChatApiResponse = {
  reply?: string;
  showLeadForm?: boolean;
  sessionToken?: string;
  error?: string;
};

export const MAX_MESSAGE_LENGTH = 500;
const HISTORY_LIMIT = 6;

const API_URL = (process.env.NEXT_PUBLIC_CHAT_API_URL ?? "").replace(/\/+$/, "");

const post = async (path: string, body: unknown) => {
  if (!API_URL) throw new Error("NEXT_PUBLIC_CHAT_API_URL is not set");

  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await response.json().catch(() => ({}))) as ChatApiResponse;
  return { ok: response.ok, status: response.status, data };
};

export const sendChatMessage = (messages: ChatApiMessage[], auth: ChatAuth) =>
  post("/chat", { messages: messages.slice(-HISTORY_LIMIT), ...auth });

export const submitLead = (lead: LeadDetails, transcript: ChatApiMessage[], auth: ChatAuth) =>
  post("/lead", { ...lead, transcript, ...auth });
