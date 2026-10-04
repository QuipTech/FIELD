# FIELD chatbot API

Serverless backend for the support chat widget on the landing page. One Lambda behind an API Gateway HTTP API calls Amazon Bedrock (Converse API) with a system prompt built from [`src/knowledge.md`](src/knowledge.md). It's fully separate from the FIELD platform: no VPC, no shared resources, and no access to customer or tenant data.

```
browser ──► API Gateway (HTTP API, CORS + throttling) ──► Lambda ──► Bedrock (Converse)
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

- Output capped at 300 tokens; user messages over 500 characters are rejected; only the last 6 messages go to Bedrock.
- Per-IP (default 20/day) and global (default 1000/day) counters in DynamoDB. Both `/chat` and `/lead` count against them. IPs are stored as keyed hashes.
- API Gateway throttling: 5 req/s, burst 10. Lambda reserved concurrency: 5.
- CORS allows only `AllowedOrigin`, and the Lambda also rejects other `Origin` headers.
- AWS Budgets alerts at 80% actual / 100% forecast of $10/month. The budget is **account-wide**, so deploy in an account that's separate from the FIELD platform.

## Prerequisites

1. AWS SAM CLI and Node.js 20+.
2. **Bedrock model access** in the deploy region (default `ap-southeast-2`) for Claude Haiku 4.5 or Amazon Nova Micro. For Anthropic models, submit the one-time use-case form in the Bedrock console first.
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

The stack outputs `ApiUrl`. Set it as the `CHAT_API_URL` GitHub repository variable (and `NEXT_PUBLIC_CHAT_API_URL` in `.env.local` for local dev), along with `TURNSTILE_SITE_KEY`.

## Switching models

Change the `BedrockModelId` parameter only; no code changes:

| Model             | ID (ap-southeast-2)                             |
| ----------------- | ----------------------------------------------- |
| Claude Haiku 4.5  | `au.anthropic.claude-haiku-4-5-20251001-v1:0`   |
| Amazon Nova Micro | `apac.amazon.nova-micro-v1:0`                   |

## Editing the knowledge

Edit [`src/knowledge.md`](src/knowledge.md) and run `npm run deploy`. It's bundled into the Lambda at build time. Everything in it is sent with every message, so keep it tight.

## Local checks

```bash
npm run typecheck
```

For local frontend testing against a deployed stack, temporarily set `AllowedOrigin` to `http://localhost:3000`, and use Turnstile's test keys (site `1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA`).
