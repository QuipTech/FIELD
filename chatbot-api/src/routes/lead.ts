import { authorize } from "../lib/auth";
import { sendLeadEmail } from "../lib/email";
import { json, replies } from "../lib/http";
import { consumeQuota } from "../lib/rateLimit";
import { parseLead } from "../lib/validate";

export const handleLead = async (body: Record<string, unknown>, ip: string) => {
  const lead = parseLead(body);
  if (!lead.ok) return json(400, { error: lead.error });

  const auth = await authorize(body.sessionToken, body.turnstileToken, ip);
  if (!auth.ok) return json(401, { error: "verification_failed", reply: replies.verificationFailed });

  if (!(await consumeQuota(ip))) return json(429, { error: "limit_reached", reply: replies.limitReached });

  await sendLeadEmail(lead.value);
  return json(200, { ok: true, sessionToken: auth.sessionToken });
};
