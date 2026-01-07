# HR Portal Front-End

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.5-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Firebase](https://img.shields.io/badge/Firebase-12.5.0-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

> A modern, responsive HR management portal built with React 19 and Vite 7. Features role-based access control, employee management, leave request workflows, and a modular component architecture designed for easy customization and scalability.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Security & Access Control](#-security--access-control)
- [Deployment](#-deployment)
- [Theme System](#-theme-system)
- [Development](#-development)
- [Academic Context](#-academic-context)
- [License](#-license)

---

## 🚀 Overview

The **HR Portal Front-End** is a production-ready Single Page Application (SPA) that demonstrates modern React development practices, role-based access control, and component-driven architecture. Built as a capstone project for Full Stack Development with Generative AI, it showcases:

- **Modern React Patterns**: Functional components, hooks, context-free state management
- **Security Best Practices**: Principle of Least Privilege (PoLP), route-level protection
- **Component Architecture**: Reusable, composable UI components
- **Responsive Design**: Mobile-first Bootstrap 5 implementation
- **Deployment Ready**: Configured for Vercel with SPA routing support

### Key Highlights

- ✅ **Role-Based Access Control**: Employee and HR dashboards with route protection
- ✅ **Modular Component Library**: Reusable Button, Card, Modal, FormField, Section components
- ✅ **Universal Layout System**: Consistent Navbar, Hero, Footer across all pages
- ✅ **Firebase-Ready Architecture**: Abstracted authentication layer for easy Phase 2 migration
- ✅ **Academic Documentation**: Comprehensive inline comments explaining concepts and implementation

---

## 📦 Features

### 👤 Employee Dashboard
- **Profile Management**: Update name, department, and email
- **Leave Requests**: Submit leave requests with date range and reason
- **Responsive Interface**: Mobile-friendly dashboard design
- **Role-Based Navigation**: Access to employee-specific features only

### 👩‍💼 HR Dashboard
- **Employee Management**: Add, edit, and delete employee records
- **Search & Filter**: Real-time employee table search functionality
- **Leave Request Management**: Approve or deny employee leave requests
- **Modal-Driven Workflows**: User-friendly modals for all CRUD operations
- **Confirmation Dialogs**: Safe deletion with confirmation modals

### 🧩 System Features
- **Route Protection**: ProtectedRoute component for secure route access
- **Dynamic Navigation**: Role-based Navbar link visibility (PoLP)
- **Form Validation**: Client-side validation for login and forms
- **Theme System**: Customizable color palette and styling
- **Console Logging**: Debug-friendly logging for development (Phase 1)

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd r63-hr-portal-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing the Application

1. **Login as Employee:**
   - Navigate to `/login`
   - Enter any username and password
   - Select "Employee" role
   - Access Employee Dashboard at `/employee`

2. **Login as HR:**
   - Navigate to `/login`
   - Enter any username and password
   - Select "HR" role
   - Access both Employee and HR Dashboards

---

## 🛠 Tech Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Front-End Framework** | React | 19.1.1 | UI component library |
| **Build Tool** | Vite | 7.1.7 | Fast development and optimized builds |
| **Routing** | React Router | 7.9.5 | Client-side navigation |
| **UI Framework** | Bootstrap | 5.3.8 | Responsive layout and components |
| **Database** | Firebase Realtime DB | 12.5.0 | Data storage (Phase 2) |
| **Deployment** | Vercel | - | Hosting platform |
| **Package Manager** | npm | - | Dependency management |

### Why These Technologies?

- **React 19**: Latest React features, improved performance, better developer experience
- **Vite 7**: Lightning-fast HMR, optimized production builds, modern tooling
- **React Router 7**: Industry-standard routing, nested routes, protected routes
- **Bootstrap 5**: Comprehensive component library, responsive grid, utility classes
- **Firebase**: Real-time database, easy integration, scalable backend (Phase 2)

---

## 🏗 Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│  React Router v7 (Client-Side Routing)                  │
│  ├── Public Routes (/, /home, /login)                   │
│  └── Protected Routes (/employee, /hr)                  │
│       └── ProtectedRoute Component                      │
│            └── Role-Based Access Control                 │
├─────────────────────────────────────────────────────────┤
│  Component Architecture                                  │
│  ├── Layout Components (Navbar, Hero, Footer)          │
│  ├── Page Components (Home, Login, Dashboards)         │
│  └── Reusable Components (Button, Card, Modal, etc.)   │
├─────────────────────────────────────────────────────────┤
│  State Management                                        │
│  ├── React Hooks (useState, useEffect)                 │
│  ├── localStorage (Phase 1 - Simulated Auth)          │
│  └── authHelper.js (Abstraction Layer)                 │
└─────────────────────────────────────────────────────────┘
```

### Design Patterns

1. **Component Composition**: Building complex UIs from simple, reusable components
2. **Separation of Concerns**: Layout, pages, utilities, and routing in separate modules
3. **Abstraction Layers**: `authHelper.js` abstracts authentication logic for easy migration
4. **Route-Level Protection**: Security at the routing layer, not component level
5. **Single Responsibility**: Each component has one clear purpose

### Key Architectural Decisions

- **Route-Level Protection**: Prevents unauthorized content flash, better UX
- **Abstraction for Firebase**: `authHelper.js` makes Phase 2 migration seamless
- **Universal Layout**: Consistent UI structure across all pages
- **Modular Components**: Easy to maintain, test, and extend

---

## 📁 Project Structure

```
r63-hr-portal-app/
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Root component (RouterProvider)
│   │
│   ├── layout/               # Global layout components
│   │   ├── Layout.jsx       # Main layout wrapper (<Outlet />)
│   │   ├── Navbar.jsx       # Global navigation (role-based links)
│   │   ├── Hero.jsx         # Page hero/banner section
│   │   └── Footer.jsx       # Global footer
│   │
│   ├── pages/                # Route-level page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── Login.jsx        # Authentication interface
│   │   ├── EmployeeDashboard.jsx  # Employee self-service
│   │   └── HRDashboard.jsx        # HR management interface
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── Card.jsx         # Card container component
│   │   ├── Modal.jsx        # Modal dialog component
│   │   ├── FormField.jsx    # Form input wrapper
│   │   ├── Section.jsx      # Page section wrapper
│   │   └── ProtectedRoute.jsx  # Route protection wrapper
│   │
│   ├── routes/               # Routing configuration
│   │   └── router.jsx       # React Router configuration
│   │
│   ├── utils/                # Utility functions
│   │   └── authHelper.js    # Authentication abstraction layer
│   │
│   ├── theme/                # Custom styling
│   │   ├── color.css        # Color palette
│   │   ├── index.css        # Base styles
│   │   ├── overrides.css    # Bootstrap overrides
│   │   └── sections.css     # Section-specific styles
│   │
│   └── assets/               # Static assets
│       └── js/
│           └── firebase.js   # Firebase configuration
│
├── public/                   # Public assets
├── documentation/            # Project documentation
├── vercel.json              # Vercel deployment config
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

### Directory Purposes

- **`layout/`**: Components that appear on every page (Navbar, Hero, Footer)
- **`pages/`**: Components that represent full pages/routes
- **`components/`**: Reusable UI building blocks
- **`routes/`**: Routing configuration and route definitions
- **`utils/`**: Helper functions and abstractions
- **`theme/`**: Custom CSS and styling overrides

---

## 🔐 Security & Access Control

### Authentication (Phase 1)

This project uses **simulated authentication** for Phase 1, as specified in the capstone requirements:

- Login form with username/password fields (validation required)
- Role selection via radio buttons (Employee or HR)
- Role stored in `localStorage` for session persistence
- No backend validation (acceptable for Phase 1 demonstration)

### Route Protection

**ProtectedRoute Component:**
- Wraps protected routes in `router.jsx`
- Checks user role before rendering
- Redirects unauthorized users to `/login`
- Supports single role (`requiredRole`) or multiple roles (`requiredRoles`)

**Example:**
```jsx
<ProtectedRoute requiredRoles={["employee", "hr"]}>
  <EmployeeDashboard />
</ProtectedRoute>
```

### Principle of Least Privilege (PoLP)

The application implements PoLP at both the route and UI levels:

**Route-Level:**
- Unauthorized users cannot access protected routes
- Protection happens before component render (no content flash)

**UI-Level (Navbar):**
- Employees only see "Employee Dashboard" link
- HR users see both "Employee Dashboard" and "HR Dashboard" links
- Prevents confusion from inaccessible navigation options

**Why PoLP Matters:**
- Better UX: Users only see what they can use
- Security: Hides protected routes from unauthorized users
- Professional: Industry-standard security practice
- Reduces cognitive load: Clear, intuitive navigation

### Phase 2 Migration

When Firebase Authentication is integrated:
- Only `authHelper.js` needs modification
- `ProtectedRoute` and Navbar logic remain unchanged
- Demonstrates proper abstraction and separation of concerns

---

## 🌐 Deployment

### Vercel Deployment

This project is configured for deployment on Vercel with explicit build configuration.

**Configuration File:** `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Key Configuration:**
- **Build Command**: `npm run build` - Runs Vite production build
- **Output Directory**: `dist` - Where Vite outputs built files
- **Framework**: `vite` - Enables Vite-specific optimizations
- **Rewrites**: SPA routing support - All routes serve `index.html`

**Why Explicit Configuration?**
- Transparency: Clear build process documentation
- Reliability: No dependency on auto-detection
- Maintainability: Easy to debug deployment issues
- Best Practice: Industry-standard deployment configuration

### Deployment Steps

1. **Connect Repository to Vercel:**
   - Import GitHub repository
   - Vercel auto-detects Vite project

2. **Deploy:**
   - Vercel uses `vercel.json` configuration
   - Builds and deploys automatically

3. **Verify:**
   - Test all routes (`/`, `/login`, `/employee`, `/hr`)
   - Verify SPA routing works (no 404s on direct URL access)

### Alternative Deployment Platforms

See `/deployment-templates` folder for configurations for:
- Netlify
- Firebase Hosting
- GitHub Pages
- Apache
- Nginx
- CloudFront

---

## 🎨 Theme System

The application uses a modular theme system that allows complete reskinning by editing only CSS files.

### Color Palette

| Variable | Hex Code | Usage |
|---------|----------|-------|
| `--color-steel` | `#4A4F55` | Panels, surfaces, cards |
| `--color-graphite` | `#1A1C1F` | Backgrounds, dark sections |
| `--color-hazard` | `#E9C357` | Highlights, CTAs, warnings |
| `--color-emergency` | `#C54139` | Errors, destructive actions |
| `--color-text-light` | `#F2F2F2` | Light text on dark backgrounds |

### Theme Files

All theme customization happens in `src/theme/`:

- **`color.css`**: Color palette definitions
- **`index.css`**: Base styles and resets
- **`overrides.css`**: Bootstrap customizations
- **`sections.css`**: Section-specific styling
- **`spacing.css`**: Custom spacing utilities

### Reskinning

To completely rebrand the application:
1. Edit color values in `src/theme/color.css`
2. Adjust styles in `src/theme/overrides.css`
3. No React component changes required

---

## 💻 Development

### Code Style

- **Functional Components**: No class components
- **Hooks**: useState, useEffect, useNavigate
- **Naming**: PascalCase for components, camelCase for functions
- **Exports**: Default exports for components
- **Comments**: Academic-level inline documentation

### Development Workflow

1. **Feature Development:**
   - Create component in appropriate directory
   - Add route if needed in `router.jsx`
   - Test locally with `npm run dev`

2. **Code Documentation:**
   - Add academic comments explaining "what" and "why"
   - Document complex logic and design decisions
   - Include Phase 2 migration notes where relevant

3. **Testing:**
   - Manual testing of all routes
   - Test role-based access (employee vs HR)
   - Verify responsive design on multiple screen sizes

### Linting

```bash
# Run ESLint
npm run lint
```

---

## 🎓 Academic Context

### Project Purpose

This project was developed as a **Capstone Project** for the **Full Stack Development with Generative AI** program. It demonstrates:

- Modern React development practices
- Component-driven architecture
- Role-based access control
- Security best practices (PoLP)
- Deployment configuration
- Academic-level code documentation

### Learning Objectives Demonstrated

1. **React Fundamentals**: Components, hooks, state management, routing
2. **Security Principles**: Principle of Least Privilege, route protection
3. **Architecture Patterns**: Component composition, abstraction layers, separation of concerns
4. **Deployment**: SPA deployment, build configuration, hosting platforms
5. **Documentation**: Inline comments, README documentation, code organization

### Phase 1 vs Phase 2

**Phase 1 (Current):**
- Simulated authentication (localStorage)
- Console logging for data operations
- Front-end only demonstration

**Phase 2 (Future):**
- Firebase Authentication integration
- Firebase Realtime Database for data persistence
- Real-time updates and synchronization

**Migration Strategy:**
- Abstracted authentication layer (`authHelper.js`)
- Minimal code changes required
- Demonstrates proper software architecture

---

## 📄 License

MIT License - See LICENSE file for details.

Free to use, modify, and distribute for educational and commercial purposes.

---

## ✨ Author

**Developed by JASYTI**

Part of the **Full Stack Development with Generative AI** Capstone Project.

**Project Date:** November 2025

---

## 🙏 Acknowledgments

- React team for the excellent framework
- Vite for the fast build tooling
- Bootstrap for the comprehensive UI framework
- React Router for the routing solution
- Firebase for the backend infrastructure (Phase 2)

---

## 📚 Additional Documentation

- **Code Comments**: Comprehensive inline documentation in all source files
- **Architecture**: See `documentation/` folder for detailed architecture notes
- **Deployment**: See `vercel.json` and deployment templates
- **Theme System**: See `src/theme/` for customization guide

---

**Last Updated:** November 2025
