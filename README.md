# Accelerating Digital 

A full-stack clone of the Accelerating Digital website with a public marketing site and a hidden admin dashboard for managing case studies. Built with **Next.js 16 + Tailwind CSS 4** on the frontend and an **Express 5 + PostgreSQL** backend secured with JWT authentication. Includes a github widget powered by a public API.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS 4, lucide-react, react-icons
- **Backend**: Express 5, PostgreSQL (`pg`), JWT (`jsonwebtoken`), bcrypt, CORS, dotenv
- **Public API:** github — sourced from publicapis.dev, no API key required

## Features

- Public marketing pages: Home, About, Expertise, Tech Stack, Case Studies, Contact
- Public case-studies list and dynamic detail pages (routed by slug)
- Hidden admin login (`/login`), not linked in navigation, protected by JWT
- Admin dashboard with full CRUD for case studies and a draft/published toggle
- Auto-generating breadcrumb and a live weather widget

## Project Structure

```
Accelerating_Digital/
├── backend/
│   └── src/
│       ├── server.js                   # Express entry — boots server, mounts routes
│       ├── db/pool.js                  # PostgreSQL pool + query helper
│       ├── routes/ServerRoute.js       # API routes (public + protected)
│       ├── controllers/ServerController.js  # Route handlers (auth + case-study CRUD)
│       └── middleware/requireAuth.js   # JWT verification middleware
│
└── frontend/
    ├── app/
    │   ├── page.js                     # Home
    │   ├── layout.js                   # Root layout
    │   ├── about-us/page.jsx
    │   ├── expertise/page.jsx
    │   ├── tech-stack/page.jsx
    │   ├── contact-us/page.jsx
    │   ├── login/page.jsx              # Hidden admin login
    │   ├── admin/page.jsx              # Admin CRUD dashboard
    │   └── case-studies/
    │       ├── page.jsx                # Public list
    │       └── [slug]/page.jsx         # Public detail page
    ├── components/                     # Reusable components (see below)
    └── public/                         # Images and SVG assets
```

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm

## Setup

Install dependencies for both apps:

```bash
cd backend && npm install
cd ../frontend && npm install
```

Create a `.env` file in `backend/`:

```env
PGHOST=localhost
PGPORT=5432
PGDATABASE=casestudy
PGUSER=postgres
PGPASSWORD=your_password
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=2h
PORT=4000
```

> Keep `.env` in `.gitignore` — never commit it.

## Database Setup

Create the database:

```bash
createdb -U postgres -h localhost casestudy
```

Create the tables:

```sql
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE case_studies (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client TEXT,
  summary TEXT,
  body TEXT,
  cover_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

Seed an admin user (insert a bcrypt hash of your chosen password). Demo credentials used in development: `admin@acceleratingdigital.ai` / `admin123`.

## Run

Run both servers at the same time.

```bash
# Backend — port 4000
cd backend && npm run dev

# Frontend — port 3000
cd frontend && npm run dev
```

- Public site: `http://localhost:3000`
- Case studies: `http://localhost:3000/case-studies`
- Admin login: `http://localhost:3000/login`

## API Reference

Base URL: `http://localhost:4000`

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | – | Health check |
| GET | `/api/case-studies` | – | List published case studies |
| GET | `/api/case-studies/:slug` | – | Get one published case study by slug |
| POST | `/api/auth/login` | – | Log in, returns a JWT token |
| GET | `/api/admin/case-studies` | ✓ | List all case studies (incl. drafts) |
| POST | `/api/admin/case-studies` | ✓ | Create a case study |
| PUT | `/api/admin/case-studies/:id` | ✓ | Update a case study |
| DELETE | `/api/admin/case-studies/:id` | ✓ | Delete a case study |

Protected routes require an `Authorization: Bearer <token>` header.

**Login example:**

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@acceleratingdigital.ai","password":"admin123"}'
```

## Reusable Components



- **navbar.jsx** — top navigation bar for the public site.
- **Footer.jsx** — site footer.
- **sectionheading.jsx** — reusable section header (`label`, `title`, `summary`, plus style-override props).
- **button.jsx** — reusable button (`title`, `titleClass`, `href`, `onclick`).
- **breadcrumb.jsx** — auto-builds from the URL path; Home and middle segments are clickable links, the current page is plain text.
- **cards.jsx** — flexible card/logo grid with `single` and `vertical` variants.
- **HowweworkReusbale.jsx** - t uses the imageside prop to control the side. It checks if imageside === "left" to render the image first. Otherwise, it     defaults to rendering the text first.
 - **cta.jsx** — call-to-action section.
 -  **servicecard.jsx** - create gradient cards.

# Parent Component

- **herosection.jsx** — landing hero.
- **services.jsx** / — services 
- **howwework.jsx**  — process section, with a reusable variant that has an optional button.
- **techStack.jsx** — technology stack section.
- **About.jsx** — about section.
- **testimonialss.jsx** — testimonials section
- **faqs.jsx** — FAQ accordion section.


## Public API Integration

This public API component dynamically fetches real-time metadata directly from GitHub for your Accelerating_Digital repository.

## Notes

- `/login` and `/admin` exist by URL but are intentionally not linked in the site navigation ("hidden admin").
- Case-study bodies are stored as HTML and rendered on the detail page, styled with Tailwind arbitrary variants for non-bold headings and section spacing.
- Slugs are human-readable, URL-safe identifiers used in case-study URLs instead of numeric IDs.
