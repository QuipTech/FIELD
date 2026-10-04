import { authorize } from "../lib/auth";
import { generateReply } from "../lib/bedrock";
import { json, replies } from "../lib/http";
import { LEAD_FORM_MARKER } from "../lib/prompt";
import { consumeQuota } from "../lib/rateLimit";
import { parseChatHistory } from "../lib/validate";

export const handleChat = async (body: Record<string, unknown>, ip: string) => {
  const history = parseChatHistory(body.messages);
  if (!history.ok) return json(400, { error: history.error });

  const auth = await authorize(body.sessionToken, body.turnstileToken, ip);
  if (!auth.ok) return json(401, { error: "verification_failed", reply: replies.verificationFailed });

  if (!(await consumeQuota(ip))) return json(429, { error: "limit_reached", reply: replies.limitReached });

  const text = await generateReply(history.value);
  const reply = text.split(LEAD_FORM_MARKER).join("").trim();

  return json(200, {
    reply: reply || replies.unavailable,
    showLeadForm: text.includes(LEAD_FORM_MARKER),
    sessionToken: auth.sessionToken,
  });
};
