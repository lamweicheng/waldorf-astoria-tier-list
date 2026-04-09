# Waldorf Astoria Tier List

Rank Waldorf Astoria hotels across five tiers: S, A, B, C, and D. The app is focused on the Waldorf Astoria brand within Hilton, uses a blue-and-silver palette, and supports add/edit flows from a single modal.

## What is in the app

- A redesigned homepage with a Waldorf Astoria-inspired blue-and-silver UI.
- Tier rows that update immediately when a hotel is added or edited.
- A shared modal for both create and edit actions.
- Local-first persistence when no database is configured.
- Prisma-backed API routes ready for Vercel + Postgres once `DATABASE_URL` and `DIRECT_URL` are set.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Database setup

The UI works without a database by storing entries in local browser storage. To enable server persistence:

```bash
npm run prisma:generate
npm run prisma:migrate
```

Set the environment variables from `.env.example` before running migrations.