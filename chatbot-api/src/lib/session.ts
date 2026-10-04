import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { config } from "./config";

// After Turnstile passes on a session's first request, the client gets a signed token
// to send on later requests instead of a new Turnstile token. Stateless: no DB lookup.
const SESSION_TTL_SECONDS = 12 * 60 * 60;

const sign = (payload: string) =>
  createHmac("sha256", config.turnstileSecretKey).update(`session:${payload}`).digest("base64url");

export const issueSessionToken = (): string => {
  const payload = Buffer.from(
    JSON.stringify({ sid: randomUUID(), exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
};

export const isValidSessionToken = (token: unknown): boolean => {
  if (typeof token !== "string" || token.length > 512) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return false;

  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { exp?: number };
    return typeof exp === "number" && exp > Date.now() / 1000;
  } catch {
    return false;
  }
};
