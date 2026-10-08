import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { config } from "./lib/config";
import { json, replies } from "./lib/http";
import { handleChat } from "./routes/chat";
import { handleLead } from "./routes/lead";

const MAX_BODY_BYTES = 64 * 1024;

const corsHeaders = (origin: string) => ({
  "access-control-allow-origin": origin,
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type",
  "access-control-max-age": "600",
  vary: "origin",
});

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
  // Only allowed origins get CORS headers; this also turns away other origins that call directly.
  const origin = event.headers.origin ?? "";
  if (!config.allowedOrigins.includes(origin)) return json(403, { error: "forbidden" });

  const result = await route(event);
  return { ...result, headers: { ...result.headers, ...corsHeaders(origin) } };
};

const route = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
  if (event.requestContext.http.method === "OPTIONS") return { statusCode: 204 };

  const raw = event.isBase64Encoded ? Buffer.from(event.body ?? "", "base64").toString("utf8") : event.body ?? "";
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) return json(413, { error: "payload_too_large" });

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const ip = event.requestContext.http.sourceIp;

  try {
    switch (event.routeKey) {
      case "POST /chat":
        return await handleChat(body, ip);
      case "POST /lead":
        return await handleLead(body, ip);
      default:
        return json(404, { error: "not_found" });
    }
  } catch (error) {
    console.error(`${event.routeKey} failed`, error);
    return json(500, { error: "server_error", reply: replies.unavailable });
  }
};
