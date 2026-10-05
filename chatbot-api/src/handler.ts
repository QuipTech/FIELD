import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { config } from "./lib/config";
import { json, replies } from "./lib/http";
import { handleChat } from "./routes/chat";
import { handleLead } from "./routes/lead";

const MAX_BODY_BYTES = 64 * 1024;

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
  // API Gateway's CORS config covers browsers; this also turns away other origins that call directly.
  if (!config.allowedOrigins.includes(event.headers.origin ?? "")) return json(403, { error: "forbidden" });

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
