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

## Passed in production — 2 November 2026

- Client and API deployed successfully on Vercel; privacy and session endpoints respond with HTTP 200.
- Atlas connection and application indexes verified using a database user restricted to read/write on booknook.
- Google sign-in completed in the browser; account remained signed in after a full page reload. Google OAuth publishing status is In production.
- Temporary account registered and logged in through the production BetterAuth endpoints; session lookup and JWT issuance passed.
- Authenticated PNG upload through Next.js to imgbb succeeded.
- Production API create, read, update, borrow, duplicate-borrow rejection, return with restored copy count, and deletion passed.
- Sign-out invalidated the temporary account's session.
- Temporary book and account records were removed after verification. The tiny test upload remains on imgbb.

The production catalogue is initially empty. Add real books through the signed-in Add Book page; preview titles are not presented as real database records.
