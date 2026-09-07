# Dragonbound Web

Standalone web build for Repo Company's Dragonbound experience.

## Production layout

- `dist/` contains the Cloudflare static deployment.
- `dist/index.html` is a lightweight Dragonbound-only shell; it does not render the rest of the Repo Company homepage.
- Dragonbound home, adoption, outings, racing and Career Mode remain available from that shell.
- Repo Company opens this app through a secure session bridge.
- Existing Supabase account and `dragonbound_career_saves` records remain authoritative.

## Accounts and saves

- Players must open Dragonbound from a signed-in Repo Company account.
- The launcher passes the current Supabase session directly to the Dragonbound subdomain; passwords are never copied or stored by the launcher.
- Career Mode reads and writes the existing `dragonbound_career_saves` table, so a player's careers follow their Repo Company account across browsers and devices.
- Local development on `127.0.0.1` can open the menu without an account for visual testing only.

## Cloudflare

- Deploy command: `npx wrangler deploy`
- Root directory: `/`
- Custom domain: `dragonbound.repocompany.uk`

After the first successful deployment, connect `dragonbound.repocompany.uk` to the Worker. The Repo Company homepage launcher is already prepared to use that production address.
