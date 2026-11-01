# Verification record

## Passed locally

- ESLint with no reported errors or warnings.
- Next.js production compilation and TypeScript checks.
- Static generation and route build for home, catalogue, login, registration, personal pages, 404, auth, upload, and dynamic details.
- Ten Express integration tests against an isolated MongoDB replica set, including simultaneous last-copy borrowing, duplicate borrows, ownership, invalid tokens, and copy restoration.
- A separate full authentication smoke test using the real Next.js BetterAuth handler and MongoDB adapter: password policy, registration, login, persisted session, JWT issuance, remote JWKS verification by Express, book creation, borrow, return, logout, and session invalidation.
- Desktop homepage inspection at 1440px and mobile inspection at 390px.
- Carousel advancement, category deep links, search filtering, private details redirect preserving the return path, and mobile registration navigation.
- No browser console errors reported during the inspected routes.

## Not yet verified with external services

- Google OAuth with the owner's configured application.
- Real imgbb uploads with the owner's API key.
- Persistent MongoDB Atlas data and the deployed client/API pair.
- Public live site URL, production route refresh, and production callback/origin configuration.

These are configuration dependencies, not simulated successes. The local design preview is labeled and cannot perform live authentication or borrowing without the required services.
