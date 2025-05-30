# Betsubara Restaurant Web App

A modern, responsive web application for Betsubara restaurant, featuring a user-friendly menu, cart, and admin management for menu items and users.

## Features

- Fully responsive design for desktop and mobile
- Customer-facing pages: Home, About, Menu, Login, Register
- Cart system with modal, quantity management, and reset functionality
- Admin dashboard for managing menu items and users
- Modals for adding/editing menu items and users, with validation
- Modern UI with Tailwind CSS

## Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Node.js/Express (backend, see `/betsubara-backend`)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Setup

#### 1. Clone the repository
```sh
git clone <repo-url>
cd Betsubara
```

#### 2. Install dependencies
##### For the frontend:
```sh
cd client
npm install
```
##### For the backend:
```sh
cd ../betsubara-backend
npm install
```

#### 3. Start the development servers
##### Backend:
```sh
npm start
```
##### Frontend (in a new terminal):
```sh
cd client
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Admin Credentials
- Email: `admin@gmail.com`
- Password: `admin12345`

## Project Structure

- `client/` - React frontend
  - `src/components/` - Navbar, Sidebar, MenuCard, etc.
  - `src/pages/` - LandingPage, About, Login, Register, Menu
  - `src/admin/` - Admin dashboard, ManageMenu, ManageUsers
  - `src/assets/` - Images and icons
- `betsubara-backend/` - Node.js/Express backend

## Customization
- Update menu items and users via the admin dashboard
- All UI is mobile-friendly and accessible

## License
MIT
