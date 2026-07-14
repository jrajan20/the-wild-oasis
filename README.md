# The Wild Oasis

> An internal hotel management application for staff to manage bookings, cabins, guests, and hotel settings.

Deployed on Vercel:
https://the-wild-oasis-tawny-rho.vercel.app/

Netlify Link:
https://jkrajan20-the-wild-oasis.netlify.app/dashboard

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

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-25-35" src="https://github.com/user-attachments/assets/e97e31e8-9811-49c8-a194-6657e71c4e13" />

> Secure login page — only authenticated hotel staff can access the dashboard.

### Dashboard

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-28-32" src="https://github.com/user-attachments/assets/958718d8-b59e-4c54-9255-ade6914b22f7" />

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-28-15" src="https://github.com/user-attachments/assets/bf3d2d8d-5b72-4446-8c66-541ad9acc956" />

The main dashboard displays key metrics and charts for a selected date range (last 7, 30, or 90 days):

- Booking count, total sales, check-in count, and occupancy rate
- "Today" activity list with arrivals and departures
- Sales area chart (total sales vs. extras)
- Stay duration donut chart

### Bookings

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-28-57" src="https://github.com/user-attachments/assets/27a05b18-4468-4b2b-9e5f-53c61458c752" />

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-31-41" src="https://github.com/user-attachments/assets/df7919fa-475a-45c6-9ae2-60e881025ed8" />

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-31-18" src="https://github.com/user-attachments/assets/541fc316-2df5-4137-af0d-e145816dd51a" />

Full bookings table with status filters (All, Checked out, Checked in, Unconfirmed) and sort options. Supports creating, viewing, and deleting bookings. Inline validation prevents exceeding cabin guest capacity.

### Cabins

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-32-37" src="https://github.com/user-attachments/assets/d30bd78b-7428-40fb-888b-1f1f0c060a95" />

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-33-17" src="https://github.com/user-attachments/assets/7999e8c5-4746-404e-a710-9639585fdb9e" />

Cabin management table with photo thumbnails, capacity, pricing, and discount. Each cabin supports edit, duplicate, and delete actions.

### User Signup

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-34-03" src="https://github.com/user-attachments/assets/0ce381ef-c768-442f-9eb7-9d5d8beebb30" />

User Signup form to create new hotel employees/users from within the application.

### Settings

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-34-33" src="https://github.com/user-attachments/assets/6acfb167-0b34-427c-8047-e71116a0c619" />

Simple settings form for hotel-wide configuration: min/max nights per booking, max guests, and breakfast price.

### Account

<img width="1300" height="653" alt="Screenshot From 2026-07-13 23-26-48" src="https://github.com/user-attachments/assets/7d7d8606-6125-45f4-a640-ef412c005ca3" />

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
