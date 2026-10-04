import { config } from "./config";
import { issueSessionToken, isValidSessionToken } from "./session";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const verifyTurnstile = async (token: string, ip: string): Promise<boolean> => {
  const response = await fetch(SITEVERIFY_URL, {
    method: "POST",
    body: new URLSearchParams({ secret: config.turnstileSecretKey, response: token, remoteip: ip }),
  });
  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
};

type AuthResult = { ok: false } | { ok: true; sessionToken?: string };

// A valid session token wins; otherwise the request must carry a Turnstile token,
// which starts a new session.
export const authorize = async (
  sessionToken: unknown,
  turnstileToken: unknown,
  ip: string,
): Promise<AuthResult> => {
  if (isValidSessionToken(sessionToken)) return { ok: true };
  if (typeof turnstileToken !== "string" || !turnstileToken || turnstileToken.length > 2048) {
    return { ok: false };
  }
  if (!(await verifyTurnstile(turnstileToken, ip))) return { ok: false };
  return { ok: true, sessionToken: issueSessionToken() };
};
