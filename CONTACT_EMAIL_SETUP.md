# Contact Form Email Setup (Resend)

Use this guide to make contact form submissions send real emails to **contactus@alpinetechdevs.com**.

## 1) Create a Resend account

1. Sign up at [resend.com](https://resend.com).
2. Verify your account email.

## 2) Add and verify your sending domain

1. In Resend, add your domain (recommended: **alpinetechdevs.com**).
2. Copy the DNS records Resend provides (SPF, DKIM, and any required verification record).
3. Add those records in your DNS provider.
4. Wait for DNS propagation, then confirm the domain shows as verified in Resend.

### Squarespace DNS steps (if your domain is managed there)

1. In Squarespace, go to **Settings → Domains → alpinetechdevs.com → DNS Settings**.
2. Under **Custom records**, add each record shown in Resend exactly as provided.
3. Match these fields for every record:
   - **Type**: `TXT`, `CNAME`, or `MX` (as shown by Resend)
   - **Host/Name**: the host label (for example: `@`, `send`, `resend._domainkey`)
   - **Value/Points to**: paste the Resend value exactly
   - **Priority**: required for `MX` records only
4. If Resend shows a full host like `resend._domainkey.alpinetechdevs.com`, enter only `resend._domainkey` in Squarespace.
5. Keep TTL at default unless Resend specifies otherwise.
6. Save all records, return to Resend, and click **Verify DNS**.

Notes:
- Avoid duplicate/conflicting SPF TXT records.
- A trailing dot in DNS values is usually optional in Squarespace.
- Propagation can be fast, but allow up to 24–48 hours in some cases.

## 3) Create an API key

1. In Resend, create a new API key.
2. Prefer least privilege (send-only) if available.
3. Save the key securely.

## 4) Add local environment variables

Create a `.env.local` file in the project root (or update it) with:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=contactus@alpinetechdevs.com
CONTACT_FROM_EMAIL=hello@alpinetechdevs.com
```

Notes:
- `CONTACT_FROM_EMAIL` must use your verified sending domain.
- `CONTACT_TO_EMAIL` is where submissions are delivered.

## 5) Install Resend SDK

```bash
npm install resend
```

## 6) Update API route to send real email

File to update: `app/api/contact/route.ts`

Implement:
1. Keep existing validation (name/email/message checks).
2. Initialize Resend with `RESEND_API_KEY`.
3. On valid submission, call `resend.emails.send()` with:
   - `from`: `CONTACT_FROM_EMAIL`
   - `to`: `CONTACT_TO_EMAIL`
   - `replyTo`: visitor email
   - `subject`: clear lead subject (e.g., "New contact form submission")
   - `text` and/or `html`: include name, email, company, message
4. If send fails, return `500` with a user-friendly error JSON payload.

## 7) Keep front-end error/success handling

File already set up: `app/contact/page.tsx`

Current behavior should remain:
- Shows success banner on 200 response.
- Shows error banner on non-200 response.

## 8) Configure production environment variables

In your hosting provider (Vercel or equivalent), add:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

Then redeploy.

## 9) Test end-to-end

1. Submit a valid form and confirm email arrives at **contactus@alpinetechdevs.com**.
2. Submit invalid email and verify validation error appears.
3. Submit very short message and verify validation error appears.
4. Simulate provider/network failure and verify friendly error handling.

## 10) Recommended hardening before/after launch

1. Add a hidden honeypot field to reduce bot spam.
2. Add rate limiting (IP or token based) on the contact endpoint.
3. Optionally add Turnstile/CAPTCHA if abuse appears.
4. Log failed sends for observability.

## Quick checklist

- [ ] Resend account created
- [ ] Domain verified (SPF/DKIM)
- [ ] API key created
- [ ] `.env.local` configured
- [ ] `resend` package installed
- [ ] `app/api/contact/route.ts` sending emails
- [ ] Production env vars set
- [ ] End-to-end tested
