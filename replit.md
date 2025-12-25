# Dr. Celeste Chiam - Professional Portfolio Website

## Overview

This is a professional portfolio and booking website for Dr. Celeste Chiam, a pianist, educator, and creative director. The application serves as a personal brand website featuring:

- Biography and credentials showcase
- Piano lesson booking system with Stripe payment integration
- Playshop and creativity coaching services
- Contact forms for inquiries
- Media gallery with performance videos
- Testimonials from students and clients

The site is built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components in `client/src/components/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Payment Processing**: Stripe integration with webhook handling
- **Email Service**: Resend for transactional emails
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions

The backend uses a simple route-based architecture:
- `server/index.ts` - Application entry point and middleware setup
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Data access layer abstraction
- `server/stripeClient.ts` - Stripe API client configuration
- `server/webhookHandlers.ts` - Stripe webhook processing

### Data Storage
- **Database**: PostgreSQL (via Neon serverless)
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Drizzle Kit with output to `./migrations`

Database tables include:
- `users` - Basic user authentication
- `services` - Service offerings (lessons, coaching, etc.)
- `bookings` - Appointment bookings with payment status

### API Structure
RESTful API endpoints under `/api/`:
- `POST /api/contact` - Contact form submissions
- `POST /api/booking/trial-request` - Trial lesson inquiries
- `POST /api/booking/create-payment-intent` - Stripe payment initialization
- `POST /api/stripe/webhook` - Stripe webhook receiver

## Deployment Architecture

The project supports split deployment to minimize idle compute costs:

### Static Frontend Deployment
- Build the frontend: `npm run build`
- Deploy `dist/public/` as a static site
- Set `VITE_API_BASE_URL` during build to point to the API backend URL
- Homepage and informational pages load without triggering backend compute

### API Backend Deployment (Autoscale)
- Set `API_ONLY=true` to run in API-only mode (no static file serving)
- Set `FRONTEND_URL` to allow CORS from the static frontend
- Backend only starts when API endpoints are called

### Environment Variables
**Frontend (build-time)**:
- `VITE_API_BASE_URL` - Full URL of the API backend (e.g., `https://api.example.com`)

**Backend**:
- `API_ONLY=true` - Enables API-only mode, skips static file serving
- `FRONTEND_URL` - URL of the static frontend for CORS
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - Resend email service API key
- Stripe credentials (managed via Replit connector)

### Key Files for Split Deployment
- `client/src/lib/config.ts` - API URL configuration helper
- `server/index.ts` - Conditional static file serving based on `API_ONLY`

## External Dependencies

### Third-Party Services
- **Stripe**: Payment processing for lesson bookings (uses Replit Stripe connector)
- **Resend**: Transactional email delivery for contact forms and booking confirmations
- **Neon Database**: Serverless PostgreSQL hosting

### Key NPM Packages
- `@neondatabase/serverless` - Database driver
- `drizzle-orm` / `drizzle-kit` - ORM and migrations
- `stripe` / `stripe-replit-sync` - Payment processing
- `resend` - Email service
- `cors` - Cross-origin request handling for split deployment
- Full shadcn/ui component library with Radix primitives