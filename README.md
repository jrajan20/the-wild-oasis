# The Wild Oasis

> An internal hotel management dashboard for staff to manage bookings, cabins, guests, and hotel settings.

Deployed on Vercel:
Link: https://the-wild-oasis-tawny-rho.vercel.app/

## Netlify Link: https://jkrajan20-the-wild-oasis.netlify.app/dashboard

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Overview

**The Wild Oasis** is a full-featured internal hotel management application built for hotel employees. Staff can log in to manage the entire hotel operation — from tracking bookings and handling check-ins/check-outs, to managing cabin inventory and configuring hotel settings. The app features a responsive dark/light mode, real-time data from Supabase, and rich data visualizations on the dashboard.

---

## Features

- **Authentication** — Secure login; only hotel employees can create new accounts. User profile updates including avatar image upload.
- **Dashboard** — At-a-glance statistics (bookings, sales, check-ins, occupancy rate) for the last 7, 30, or 90 days. Includes a sales area chart and stay duration donut chart.
- **Bookings** — Full CRUD for bookings. Filter by status (all, checked in, checked out, unconfirmed) and sort by date or amount. Create new bookings directly from the UI with per-cabin validation (max guests, date conflicts).
- **Check-In / Check-Out** — Process guest arrivals and departures with optional breakfast add-on at check-in.
- **Cabins** — Manage cabin listings with images, capacity, pricing, and discounts. Supports add, edit, duplicate, and delete.
- **Users** — Create new hotel staff accounts. Password confirmation validation.
- **Settings** — Configure hotel-wide settings: minimum/maximum nights per booking, maximum guests per booking, and breakfast price.
- **Dark Mode** — Full dark/light theme toggle, persisted via `localStorage`.
- **Pagination** — All tables are paginated with results count.
- **Sorting & Filtering** — URL-based filter and sort state via `react-router-dom` search params.
- **Error Handling** — Global error boundary with a friendly fallback UI.
- **Toast Notifications** — Success and error feedback on all mutations via `react-hot-toast`.

---

## Tech Stack

| Category               | Technology                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| **Framework**          | [React 18](https://react.dev/)                                          |
| **Build Tool**         | [Vite](https://vitejs.dev/)                                             |
| **Routing**            | [React Router v6](https://reactrouter.com/)                             |
| **Backend / Database** | [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)         |
| **Server State**       | [TanStack Query v4](https://tanstack.com/query/v4)                      |
| **Forms**              | [React Hook Form](https://react-hook-form.com/)                         |
| **Styling**            | [Styled Components v6](https://styled-components.com/)                  |
| **Charts**             | [Recharts](https://recharts.org/)                                       |
| **Icons**              | [React Icons](https://react-icons.github.io/react-icons/)               |
| **Date Utilities**     | [date-fns](https://date-fns.org/)                                       |
| **Notifications**      | [React Hot Toast](https://react-hot-toast.com/)                         |
| **Error Boundary**     | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) |
| **Linting**            | ESLint with react-app config                                            |

---

## Screenshots

### Login

![Login](./src/assets/screenshots/login.png)

> Secure login page — only authenticated hotel staff can access the dashboard.

### Dashboard

The main dashboard displays key metrics and charts for a selected date range (last 7, 30, or 90 days):

- Booking count, total sales, check-in count, and occupancy rate
- "Today" activity list with arrivals and departures
- Sales area chart (total sales vs. extras)
- Stay duration donut chart

### Bookings

Full bookings table with status filters (All, Checked out, Checked in, Unconfirmed) and sort options. Supports creating, viewing, and deleting bookings. Inline validation prevents exceeding cabin guest capacity.

### Cabins

Cabin management table with photo thumbnails, capacity, pricing, and discount. Each cabin supports edit, duplicate, and delete actions.

### Settings

Simple settings form for hotel-wide configuration: min/max nights per booking, max guests, and breakfast price.

### Account

Update profile name and avatar, or change password.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm

### Installation

```bash
git clone https://github.com/your-username/the-wild-oasis.git
cd the-wild-oasis
npm install
```

### Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── context/          # React context (DarkModeContext)
├── data/             # Seed data and Uploader utility
├── features/         # Feature-based modules
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── hooks/            # Shared custom hooks
├── pages/            # Route-level page components
├── services/         # Supabase API layer
├── styles/           # Global styles
├── ui/               # Reusable UI components
└── utils/            # Constants and helper functions
```

---

## License

This project is for educational purposes.
