# Xenia Zoo Dashboard

A Next.js demo app that shows a **zoo operations dashboard** for a fictional collection of animals. The `/api/animals` route returns **synthetic** animal records (name, species, enclosure, need levels, notes). The UI lists animals, shows hunger/thirst/hygiene as meters, refreshes on a timer, and supports a detail dialog per animal.

## Tech stack

- **Next.js 15** (App Router, Turbopack in dev) with `output: "standalone"` for Docker
- **React 19**
- **TanStack React Query** — fetch + cache, 60s poll, manual refresh
- **Zod** — request/response shape validation
- **Tailwind CSS 4** — styling
- **TypeScript** and **ESLint** (Next.js config)

## Prerequisites

- **Node.js 20+** (matches the Docker image)
- **npm** (lockfile is `package-lock.json`)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dev server uses Turbopack (`next dev --turbopack`).

Other scripts:

| Script        | Description        |
| ------------- | ------------------ |
| `npm run build` | Production build |
| `npm run start` | Start production server (after `build`) |
| `npm run lint`  | Run ESLint        |

## Docker

Build and run with Compose (exposes port **3000**):

```bash
docker compose up --build
```

The [Dockerfile](./Dockerfile) uses a multi-stage build: `npm ci`, `npm run build`, then runs the Next.js **standalone** server as a non-root user.

## API

- **`GET /api/animals`** — Returns JSON: `{ animals: ZooAnimal[], generatedAt: string (ISO datetime) }`.
- Each `GET` generates **20** new animals server-side (see [`src/lib/generate-animals.ts`](src/lib/generate-animals.ts)). The route is **`force-dynamic`** (not cached).
- The client validates responses with [`zooAnimalsResponseSchema`](src/schemas/zoo-animal.ts).

## Project layout

```
src/
  app/
    api/animals/route.ts   # JSON API
    page.tsx              # Home (header + dashboard)
    layout.tsx, globals.css
  components/             # Header, list, detail dialog, meters, query provider, states
  hooks/use-zoo-animals.ts  # React Query: stale/refetch 60s
  lib/                     # generate-animals, fetch-animals, need helpers
  schemas/zoo-animal.ts    # Zod schemas + types
```

## License / privacy

`package.json` sets `"private": true`. This is a sample application with **no real zoo data** — all animals are random fixtures for demonstration.
