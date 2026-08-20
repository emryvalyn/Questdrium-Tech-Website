# Firebase migration plan

The app currently uses local development persistence behind two server-only adapters:

- `src/lib/content-store.ts` owns site content reads and writes.
- `src/lib/asset-store.ts` owns image, logo, favicon, and project asset uploads.

The dashboard API contracts do not need to change when Firebase is introduced.

## Recommended Firebase architecture

Use **Firebase App Hosting** for this Next.js app rather than static Firebase Hosting. The master dashboard and API routes require a server runtime for signed sessions, content writes, and protected uploads.

- Firestore collection: `siteContent/primary`
- Firebase Storage folder: `site-assets/`
- Firebase App Hosting: Next.js server and API routes
- Firebase Authentication: optional future replacement for the current master credential flow
- App Check: enable for browser-facing Firebase services

## Migration sequence

1. Create a Firebase project and enable Firestore, Storage, App Hosting, and App Check.
2. Add `FIREBASE_PROJECT_ID` and `FIREBASE_STORAGE_BUCKET` to the deployment environment.
3. Implement Firestore reads and writes in `content-store.ts`.
4. Implement Storage uploads and signed/public URLs in `asset-store.ts`.
5. Keep the current API routes and dashboard UI unchanged.
6. Move the master login to Firebase Authentication or an identity provider before production.
7. Add Firestore and Storage security rules that permit writes only to the master identity.
8. Move content from `src/data/site-content.json` into the `siteContent/primary` document.

Do not commit Firebase service-account JSON, private keys, or `.env.local`. Use App Hosting environment secrets for server credentials.
