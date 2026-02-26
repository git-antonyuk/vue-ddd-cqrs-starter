# vue-ddd-cqrs-starter

Vue 3 boilerplate with domain-driven structure and CQRS-style command/query separation. Includes a working Todo domain as reference.

## Stack

| Layer        | Tech                                  |
| ------------ | ------------------------------------- |
| Framework    | Vue 3 + TypeScript + Vite             |
| State        | Pinia                                 |
| Data         | TanStack Query (queries + mutations)  |
| UI           | PrimeVue 4 + Tailwind CSS 4           |
| Testing      | Vitest                                |
| Lint         | ESLint (antfu config)                 |

## Architecture

```text
src/
  app/                  ← App shell (bootstrap, plugins, router, styles)
  domains/              ← Domain modules (one folder per bounded context)
    <domain>/
      commands/         ← Write operations (mutations)
      queries/          ← Read operations (queries)
      model/            ← Types + Pinia store
      components/       ← Domain UI components
      pages/            ← Route-level pages
      utils/            ← Domain helpers
      routes.ts         ← Domain route definitions
      index.ts          ← Public API barrel
  shared/               ← Cross-domain code
    api/
    composables/
    types/
    ui/
    utils/
```

### How it flows (CQRS)

**Read path** — `queries/` use TanStack Query to fetch data and hydrate the Pinia store.

**Write path** — `commands/` use TanStack mutations, persist changes, then update the query cache.

Store holds derived/filtered state; components consume it via `storeToRefs`.

### Adding a new domain

1. Create `src/domains/<name>/` with the folders above.
2. Define types in `model/types.ts`, store in `model/<name>Store.ts`.
3. Add queries in `queries/` and commands in `commands/`.
4. Register routes in `routes.ts` and spread them into `src/app/router/routes.ts`.
5. Export the public API from `index.ts`.

## Commands

```bash
make install    # Install dependencies
make dev        # Dev server (localhost:3333)
make build      # Production build
make test       # Tests (watch mode)
make coverage   # Tests with coverage
make lint       # Lint
make lint-fix   # Lint + auto-fix
```
