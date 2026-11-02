# BookNook

A small online library built with Next.js, BetterAuth, and a separate Express/MongoDB API. The interface follows the approved Figma Concept C, **After Hours**.

## Live project links

- **Website:** [BookNook](https://booknook-assignment-8.vercel.app)
- **Public book catalogue API:** [GET /books](https://booknook-assignment-8-server.vercel.app/books)
- **Client repository:** [MH-git-ui/Assignment-8](https://github.com/MH-git-ui/Assignment-8)
- **Server repository:** [MH-git-ui/Assignment-8-server](https://github.com/MH-git-ui/Assignment-8-server)

The API is intentionally endpoint-based: its root URL returns a JSON “endpoint does not exist” message. Use `/books` to view the public catalogue.

## Features

- Responsive dark navy and lime interface with a three-slide Swiper homepage.
- Searchable three-column catalogue, category filtering, and newest-six arrivals from MongoDB.
- Email/password registration and Google sign-in through BetterAuth's MongoDB adapter.
- Protected book details, personal shelves, profiles, and persistent login sessions.
- Add and edit books with imgbb cover uploads and owner-only deletion.
- Borrow and return books with duplicate-borrow protection and transactional copy inventory.
- Accessible confirmation dialogs, toast messages, loading states, and a custom 404 page.

## Local development

Use Node.js 22 or newer and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Without `NEXT_PUBLIC_API_URL`, the catalogue displays clearly labeled **design-preview titles**. No simulated login, borrowing, or persistent storage is enabled.

For the working library, copy `.env.example` to `.env.local` and configure the services in [SETUP.md](SETUP.md). Start the [Express server](https://github.com/MH-git-ui/Assignment-8-server) on port 4000. Restart Next.js whenever public environment variables change.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Structure

- `src/app`: pages, metadata, BetterAuth handlers, and authenticated upload handler.
- `src/components`: responsive feature components and shadcn-style Radix UI primitives.
- `src/lib`: shared types, API client, auth configuration, and validation helpers.
- `public/covers`: original vector cover illustrations based on the approved design direction; preview content only.

The database is the source of truth when the API is configured. Public catalogue responses omit owner identifiers and email addresses. Private API requests carry short-lived BetterAuth JWTs; the Express service verifies signatures, issuer, and audience, and applies ownership checks.

## Assignment delivery status

The client and server have separate repositories and meaningful feature commits. The minimum is 15 client and 8 server commits; verify with `git log --oneline` in each repository.

MongoDB Atlas, Google OAuth (published), imgbb, and both Vercel deployments are configured and live-tested. The live catalogue starts with eight community-library books and grows when signed-in users add books. Password reset and email verification are intentionally not enabled, per the assignment.

Design source: https://www.figma.com/design/4CS6nG9ZuBBWpFkaLjJGkB?node-id=9-640

## Production services

- [Website](https://booknook-assignment-8.vercel.app)
- [Catalogue endpoint](https://booknook-assignment-8-server.vercel.app/books)
- [Privacy notice](https://booknook-assignment-8.vercel.app/privacy)

MongoDB Atlas, imgbb, and Google OAuth credentials are configured in ignored local environment files and production hosting secrets. Never commit credential values. Google sign-in is in production. See [VERIFICATION.md](VERIFICATION.md) for the live checks completed on 2 November 2026.
