# HR Portal Front-End Application – Technical Documentation

## 🧭 Overview
A responsive Human Resources management portal built with **React 19** and **Vite 7**, demonstrating professional front-end development practices using **Bootstrap 5** and **Firebase Realtime Database**.

This project is the final Capstone for the Full Stack Development (Front-End with React) module. It applies modern React architecture patterns including component-based design, persistent layouts, and dynamic content rendering.

---

## ⚙️ Technology Stack
| Category | Tools / Libraries | Purpose |
|-----------|-------------------|----------|
| Core Framework | React 19 (Vite 7) | Fast, modular front-end application |
| UI & Styling | Bootstrap 5 | Layout, spacing, and responsiveness |
| Routing | React Router v7 | Multi-page navigation within SPA |
| Database | Firebase Realtime Database | Live JSON API for CRUD simulation |
| Version Control | Git + GitHub | Code management and documentation |

---

## 🧱 Architecture Summary
The application follows a **layout-content architecture** where persistent elements remain constant (Navbar, Hero, Footer) and only the central content changes per route.

```
<Layout>
 ├── <Navbar />
 ├── <Hero />
 ├── [Outlet → Dynamic Page Content]
 └── <Footer />
</Layout>
```

### Folder Structure
```
src/
├── App.jsx              # Root router host
├── main.jsx             # React entry point
├── layout/              # Global Layout (Navbar, Hero, Footer wrapper)
├── components/          # Reusable UI elements
├── pages/               # Page content (Home, Login, Employee, HR)
├── routes/              # Router configuration
├── firebase.js          # Firebase Realtime DB setup
└── assets/              # Static files (logos, icons, etc.)
```

---

## 📋 Functional Objectives
### Employees
- Register and edit personal information
- Submit leave requests
- View leave status in real time

### HR Users
- View all employees and leave requests
- Approve or deny pending leave requests
- Edit employee data where needed

---

## 🧩 Core Components
| Component | Purpose |
|------------|----------|
| **Navbar.jsx** | Site navigation with route links |
| **Hero.jsx** | Page banner with title and tagline |
| **Footer.jsx** | Persistent footer across all pages |
| **Layout.jsx** | Wraps global structure and `<Outlet />` region |
| **ActionButton.jsx** | Reusable call-to-action button |
| **CardContainer.jsx** | Generic Bootstrap card for content grouping |

---

## 📑 Pages
| Page | Route | Purpose |
|------|--------|----------|
| **Home.jsx** | `/` | Displays charter summary and entry button |
| **Login.jsx** | `/login` | Simulated login form with role lookup |
| **EmployeeDashboard.jsx** | `/employee` | Profile + leave request form |
| **HRDashboard.jsx** | `/hr` | Employee list and approval interface |

---

## 🔄 Firebase Configuration
The Firebase Realtime Database acts as a lightweight live JSON endpoint.

### `.env` example
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=fs-hr-portal-db.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://fs-hr-portal-db-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=fs-hr-portal-db
```

### firebase.js
```
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
```

---

## 🧪 Development Workflow
| Step | Command | Description |
|------|----------|-------------|
| 1 | `npm install` | Install dependencies |
| 2 | `npm run dev` | Start Vite development server |
| 3 | `npm run build` | Create production build |
| 4 | `npm run preview` | Preview built app locally |

---

## 🧭 Work Breakdown Structure (WBS Reference)
**Phase Summary:**
1. Project Initialization
2. Design & Wireframing
3. Component Architecture
4. Page Content Development
5. Routing & Navigation
6. Firebase Integration
7. UI Design & Styling
8. Documentation & Version Control
9. Testing & Presentation

Full detailed WBS is documented in `Capstone FSD Front End with React.md` under `/docs/`.

---

## 📘 Documentation Standards
- Exports at bottom of all component files.
- Paragraph-style inline comments explaining purpose and rationale.
- Semantic naming and clear folder organization.
- Commit messages use the format: `type(scope): description` (e.g., `feat(layout): add reusable footer`).

---

## ✅ Validation Checklist
| Area | Criteria |
|-------|-----------|
| Environment | Firebase and Vite run without warnings |
| Layout | Navbar, Hero, Footer consistent across pages |
| Content | Page-specific content renders via `<Outlet />` |
| Responsiveness | Tested on desktop and mobile breakpoints |
| Data Flow | CRUD operations functional with Firebase |
| Documentation | All components commented and exported correctly |

---

## 📄 License
Educational / Demonstration Use Only.  
© 2025 JASYTI – Full Stack Development Program.