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
  bedrockModelId: process.env.BEDROCK_MODEL_ID || "au.anthropic.claude-haiku-4-5-20251001-v1:0",
  allowedOrigin: required("ALLOWED_ORIGIN"),
  dailyLimitPerIp: numberOr("DAILY_LIMIT_PER_IP", 20),
  globalDailyLimit: numberOr("GLOBAL_DAILY_LIMIT", 1000),
  sesFromEmail: required("SES_FROM_EMAIL"),
  leadNotifyEmail: required("LEAD_NOTIFY_EMAIL"),
  turnstileSecretKey: required("TURNSTILE_SECRET_KEY"),
  tableName: required("TABLE_NAME"),
};

export const MAX_OUTPUT_TOKENS = 300;
export const MAX_USER_MESSAGE_LENGTH = 500;
export const HISTORY_LIMIT = 6;
