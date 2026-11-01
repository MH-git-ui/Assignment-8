# Connect BookNook services

The client lives in `Assignment-8`; the API lives in the separate `Assignment-8-server` repository. Neither repository contains credentials. Do not commit `.env.local` or `.env`.

## 1. MongoDB

Create a MongoDB Atlas cluster, a database user, and an access rule restricted to the machines or hosting service that need the database. Copy the connection string into `MONGODB_URI` in both environment files. Use `booknook` for `MONGODB_DB` in both.

Atlas supports the transactions used for borrowing. A local MongoDB installation must run as a replica set; a standalone instance cannot run the borrow/update/delete transactions. The API creates indexes on startup, including a unique user/book borrow index.

## 2. BetterAuth

In the client `.env.local`, set `BETTER_AUTH_URL=http://localhost:3000`. Generate a random secret locally:

```sh
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Put the result in `BETTER_AUTH_SECRET`. Do not share it in chat or commit it. Email/password login works once MongoDB and these values are configured. Registration requires an uppercase letter, a lowercase letter, and at least six characters; this is enforced in both the form and the signup handler. Registration sends the user to Login.

## 3. Google sign-in

Create a Google Cloud project and OAuth consent screen, then a Web application OAuth client. Add your test users if the consent screen remains in testing mode.

- JavaScript origin: `http://localhost:3000`
- Redirect URI: `http://localhost:3000/api/auth/callback/google`

Save its client ID and secret as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in the client environment. For deployment, add equivalent HTTPS production origins and callback URLs in Google Cloud.

## 4. imgbb

Create an imgbb API key and set `IMGBB_API_KEY` in the client environment only. The authenticated Next.js upload handler keeps this key out of browser code. JPG, PNG, and WebP covers up to 5 MB are accepted. Uploaded covers become publicly accessible on imgbb.

## 5. Run the API

In the server repository, copy `.env.example` to `.env` and fill in MongoDB. Keep these local defaults:

```dotenv
PORT=4000
CLIENT_ORIGIN=http://localhost:3000
AUTH_ISSUER=http://localhost:3000
AUTH_AUDIENCE=booknook-api
JWKS_URL=http://localhost:3000/api/auth/jwks
```

Run `pnpm install`, then `pnpm dev`. Set the client `NEXT_PUBLIC_API_URL=http://localhost:4000`, restart `pnpm dev`, register, log in, and add books. An empty connected database correctly shows an empty catalogue.

## 6. Deploy and verify

Deploy the Express repository on a Node-compatible host and the client on Vercel or another Next.js-compatible host. Configure production environment variables on each platform. The client URL must match `BETTER_AUTH_URL`, the API's `CLIENT_ORIGIN` and `AUTH_ISSUER`, and the origin in `JWKS_URL`. Set `NEXT_PUBLIC_API_URL` to the HTTPS API URL before building the client. No trailing slashes on configured origins.

Replace example contact/social destinations, add the real live URL to README, and verify:

1. Registration validation, email login, Google login, and logout.
2. Private-route refresh retains the logged-in user and return-to-login redirects work.
3. Add, view, edit, and delete with real cover uploads.
4. Borrow, duplicate borrow rejection, unavailable copies, and return.
5. A second account cannot edit/delete another user's books or return their loans.
6. Desktop, tablet, mobile, unknown routes, and direct-link reloads.

Automated API tests use their own temporary MongoDB replica set, never your configured database. Google OAuth, imgbb, and production hosting still need live verification after setup.
