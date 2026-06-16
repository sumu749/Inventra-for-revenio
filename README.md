# Revenio

A compact inventory starter app built with Next.js (App Router), Tailwind CSS, and Firebase for authentication. Revenio is designed as a minimal but extensible foundation for building inventory or product-management experiences with strong accessibility and developer ergonomics.

---

## Key features

- Next.js App Router with client components
- Firebase Authentication (email/password + Google)
- LocalStorage-backed items store with seeded sample data
- Add / manage / view item flows
- Accessible components (focus-visible, keyboard-friendly controls)
- Responsive Tailwind CSS UI with modern patterns

---

## Setup

Prerequisites:

- Node.js 18+
- npm (or yarn/pnpm)

1. Install dependencies

```bash
npm install
```

2. Add Firebase credentials

Create a `.env.local` file in the project root with these values (replace with your Firebase project values):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=app_id
```

3. Run the dev server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
npm run start
```

Notes:

- The contact form is simulated in this starter and does not send network requests by default — it falls back to a `mailto:` link.
- Items are persisted to `localStorage` under the key `revenio-items`. Seed data is provided in `data/products.js`.

---

## Routes

- `/` — Home (landing)
- `/about` — About page (overview & values)
- `/contact` — Contact form
- `/items` — Items listing
- `/items/add` — Add new item (protected)
- `/items/manage` — Manage items (protected)
- `/items/[id]` — Item detail
- `/login` — Login
- `/register` — Register

---

## Live URL

Live URL: <YOUR_DEPLOYED_URL>

---

## Contributing

Contributions and improvements are welcome. Open a PR with focused changes and a short description of the problem being solved.

---

## License

This starter is provided as-is for learning and prototyping purposes.
