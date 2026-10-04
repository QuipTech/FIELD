import type { APIGatewayProxyStructuredResultV2 } from "aws-lambda";

export const json = (statusCode: number, body: unknown): APIGatewayProxyStructuredResultV2 => ({
  statusCode,
  headers: { "content-type": "application/json" },
  body: JSON.stringify(body),
});

// User-facing copy returned alongside error codes so the widget can show it as-is.
export const replies = {
  limitReached:
    "We've hit today's chat limit. Please reach us through the contact page at /contact and the team will get back to you.",
  verificationFailed:
    "Sorry, we couldn't confirm you're human. Please refresh the page and try again, or contact us at /contact.",
  unavailable:
    "Sorry, I'm having trouble right now. Please try again in a moment, or reach the team at /contact.",
};
