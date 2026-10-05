const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable ${name}`);
  return value;
};

const numberOr = (name: string, fallback: number): number => {
  const value = Number(process.env[name]);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

export const config = {
  geminiApiKey: required("GEMINI_API_KEY"),
  geminiModel: process.env.GEMINI_MODEL || "gemini-3.8-flash",
  geminiFallbackModel: process.env.GEMINI_FALLBACK_MODEL || "gemini-3.5-flash-lite",
  // Comma-separated, e.g. "https://quiptechfield.com.au,https://www.quiptechfield.com.au".
  allowedOrigins: required("ALLOWED_ORIGIN").split(",").map((origin) => origin.trim()),
  dailyLimitPerIp: numberOr("DAILY_LIMIT_PER_IP", 20),
  globalDailyLimit: numberOr("GLOBAL_DAILY_LIMIT", 1000),
  sesFromEmail: required("SES_FROM_EMAIL"),
  leadNotifyEmail: required("LEAD_NOTIFY_EMAIL"),
  turnstileSecretKey: required("TURNSTILE_SECRET_KEY"),
  tableName: required("TABLE_NAME"),
};

// Covers the model's thinking as well as the reply; the system prompt keeps replies to a few sentences.
export const MAX_OUTPUT_TOKENS = 1500;
export const MAX_USER_MESSAGE_LENGTH = 500;
export const HISTORY_LIMIT = 6;
