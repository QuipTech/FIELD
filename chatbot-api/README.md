# FIELD chatbot API

Serverless backend for the support chat widget on the landing page. One Lambda behind an API Gateway HTTP API calls the Google Gemini Interactions API with a system prompt built from [`src/knowledge.md`](src/knowledge.md). It's fully separate from the FIELD platform: no VPC, no shared resources, and no access to customer or tenant data.

```
browser ──► API Gateway (HTTP API, CORS + throttling) ──► Lambda ──► Gemini Interactions API
                                                            ├──► DynamoDB (daily usage counters, TTL)
                                                            ├──► SES (lead emails)
                                                            └──► Cloudflare Turnstile siteverify
```

## Endpoints

| Route        | Body                                                                      | Returns                                         |
| ------------ | ------------------------------------------------------------------------- | ----------------------------------------------- |
| `POST /chat` | `messages[]` (`{ role, text }`), `sessionToken` or `turnstileToken`       | `{ reply, showLeadForm, sessionToken? }`        |
| `POST /lead` | `name`, `email`, `company`, `message?`, `transcript[]?`, `sessionToken` or `turnstileToken` | `{ ok, sessionToken? }`  |

The first request of a session must include a Turnstile token. The API verifies it and returns a signed `sessionToken` (valid 12h) for later requests. Errors return `{ error, reply? }`; when `reply` is present the widget shows it as-is.

## Cost and abuse limits

- Output capped at 1500 tokens (thinking + reply); user messages over 500 characters are rejected; only the last 6 messages go to Gemini.
- Per-IP (default 20/day) and global (default 1000/day) counters in DynamoDB. Both `/chat` and `/lead` count against them. IPs are stored as keyed hashes.
- API Gateway throttling: 5 req/s, burst 10. Lambda reserved concurrency: 5.
- CORS allows only `AllowedOrigin`, and the Lambda also rejects other `Origin` headers.
- AWS Budgets alerts at 80% actual / 100% forecast of $10/month. The budget is **account-wide**, so deploy in an account that's separate from the FIELD platform.

## Prerequisites

1. AWS SAM CLI and Node.js 20+.
2. **Gemini API key** from Google AI Studio (https://aistudio.google.com/apikey). It's passed as the `GeminiApiKey` stack parameter and never reaches the browser.
3. **SES**: verify `SesFromEmail` (or its domain). While SES is in sandbox mode, `LeadNotifyEmail` must be verified too.
4. **Cloudflare Turnstile**: create a widget for your site's domain to get the site key (frontend) and secret key (backend).
5. Reserved concurrency needs enough unreserved concurrency left in the account. New accounts with a 10-concurrency limit can't reserve 5; request an increase or remove `ReservedConcurrentExecutions`.

## Deploy

```bash
cd chatbot-api
npm install
npm run deploy:guided   # first time: prompts for parameters and saves samconfig.toml
npm run deploy          # afterwards: one command
```

The stack outputs `ApiUrl`. Set it as the `CHAT_API_URL` GitHub repository secret (and `NEXT_PUBLIC_CHAT_API_URL` in `.env.local` for local dev), along with `TURNSTILE_SITE_KEY`.

## Text-only replies

The assistant only ever returns text:

- Messages asking to generate an image, logo, picture, etc. get a fixed reply ("I'm the FIELD support assistant... can't generate images") without calling Gemini. See [`src/lib/imageRequest.ts`](src/lib/imageRequest.ts).
- The system prompt also tells the model it can't create images, for requests the pattern misses.
- Only `text` blocks from `model_output` steps of the Gemini response are kept; thoughts and any other content types are dropped.

## Switching models

Change the `GeminiModel` parameter only (default `gemini-3.8-flash`). If it's overloaded or times out, the request is retried once on `GeminiFallbackModel` (default `gemini-3.5-flash-lite`). Requests are stateless (`store: false`) and use `thinking_level: "low"` to keep thinking short; the 1500-token output cap covers thinking plus the reply; `minimal` isn't supported by `gemini-3.8-flash`.

Older model IDs such as `gemini-2.5-flash` return 404 ("no longer available to new users") for new API keys.

## Editing the knowledge

Edit [`src/knowledge.md`](src/knowledge.md) and run `npm run deploy`. It's bundled into the Lambda at build time. Everything in it is sent with every message, so keep it tight.

## Local checks

```bash
npm run typecheck
```

For local frontend testing against a deployed stack, temporarily set `AllowedOrigin` to `http://localhost:3000`, and use Turnstile's test keys (site `1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA`).
