# QuipTech FIELD — Landing Page

Marketing landing page for QuipTech FIELD, the AI technical intelligence platform for critical assets. Built with Next.js (App Router), TypeScript, and Tailwind CSS, exported as a static site.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

| Command         | Description                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the local dev server                |
| `npm run build` | Build the static export into `out/`       |
| `npm run start` | Serve the production build locally        |
| `npm run lint`  | Run ESLint                                |

## Project structure

```
app/            # App Router entry (layout, page, global styles)
components/     # Page sections, one folder per section
lib/            # Static content/data used by components (nav links, pricing tiers, FAQ items, etc.)
public/         # Static assets (images, videos)
chatbot-api/    # Serverless Gemini backend for the support chat widget (deployed separately, see chatbot-api/README.md)
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy-landing.yml`](.github/workflows/deploy-landing.yml), which:

1. Installs dependencies and builds a static export (`output: 'export'` in `next.config.js`) into `out/`.
2. Authenticates to AWS via GitHub OIDC (no long-lived AWS keys).
3. Syncs `out/` to an S3 bucket.
4. Invalidates the CloudFront distribution cache.

### Required GitHub secrets

| Secret                      | Description                                      |
| ---------------------------- | ------------------------------------------------- |
| `AWS_ROLE_ARN`               | IAM role assumed via OIDC, scoped to this repo    |
| `S3_BUCKET_NAME`              | Target S3 bucket for the static site              |
| `CLOUDFRONT_DISTRIBUTION_ID`  | CloudFront distribution to invalidate on deploy   |

### Required GitHub variables

| Variable             | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `CHAT_API_URL`       | `ApiUrl` output of the `chatbot-api` stack, used by the chat widget |
| `API_BASE_URL`       | FIELD backend API base URL (no trailing slash), used by the demo request form |
| `TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the chat widget and demo request form |

For local development, copy `.env.example` to `.env.local` and fill in the same values.

The IAM role's trust policy must allow `sts:AssumeRoleWithWebIdentity` from `token.actions.githubusercontent.com` for this repository.
