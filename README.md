# HR Portal – React + Vite + Bootstrap

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blueviolet)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-orange)
![License](https://img.shields.io/badge/License-MIT-green)
![Deploy](https://img.shields.io/badge/Deployed-Vercel-black)

---

## 🚀 Overview

The **HR Portal Front-End** is a fully modular, reskinnable application built with **React 19**, **Vite 7**, **Bootstrap 5**, and a custom **theme system**.  
It features employee and HR dashboards, modal-driven workflows, search/filtering, role-based access simulation, and a clean reusable component library.

This project follows a universal layout model (Navbar → Hero → Outlet → Footer), supports client-side routing, and uses console logging to simulate data operations without a backend.

---

## 📦 Features

### 👤 Employee Features
- Update profile (name, dept, email)
- Submit leave requests
- Fully responsive dashboard
- Themed UI components

### 👩‍💼 HR Features
- Add new employees (modal)
- Edit employee records
- Delete employees (confirmation modal)
- Search/filter employee table
- Approve or deny leave requests
- Role-based access (via localStorage)

### 🧩 System Features
- Modular component library (Card, Button, Modal, Section, FormField)
- Route protection (HR only)
- Console-logged workflows for debugging
- Theme folder for easy reskinning
- Deployment templates for any hosting provider
- Works fully client-side (no backend required)

---

## 🗂 Folder Structure

```
src/
│
├── App.jsx
├── main.jsx
│
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── FormField.jsx
│   ├── Modal.jsx
│   └── Section.jsx
│
├── layout/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
│
├── pages/
│   ├── EmployeeDashboard.jsx
│   ├── Home.jsx
│   ├── HRDashboard.jsx
│   └── Login.jsx
│
├── routes/
│   └── router.jsx
│
├── theme/
│   ├── color.css
│   ├── index.css
│   ├── overrides.css
│   ├── spacing.css
│   └── sections.css
│
└── assets/
    └── images/
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| Front-End | React 19 (Vite 7) |
| Routing | React Router 7 |
| UI Framework | Bootstrap 5 |
| Theming | Custom CSS Theme System |
| Deployment | Vercel |
| Tools | Node.js, npm |

---

## 🔐 Role-Based Access Logic

This project simulates authentication using:

- A login form
- Radio-button role selection (employee / hr)
- `localStorage.setItem("role", role)`
- Page-level guards in HRDashboard
- Route fallback via Vercel rewrite rules

No password or backend validation is needed for this Capstone.

### Principle of Least Privilege (PoLP)

This application implements the **Principle of Least Privilege** (PoLP) in both route protection and user interface design. PoLP is a fundamental security and UX principle that states users should only be given the minimum level of access (or visibility) necessary to perform their tasks.

#### What is Principle of Least Privilege?

The Principle of Least Privilege is a security concept that originated in computer security but applies equally well to user interface design. It means:

1. **Users should only see what they can use**: Don't show navigation options, buttons, or features that users don't have permission to access
2. **Minimize exposure**: Hide protected routes and features from unauthorized users
3. **Reduce cognitive load**: Users shouldn't have to figure out which options they can actually use
4. **Prevent confusion**: Avoid showing links that redirect users to login or error pages

#### Implementation in This Application

**Route-Level Protection:**
- Routes are protected using `ProtectedRoute` components in `router.jsx`
- Unauthorized users are redirected to `/login` before protected components render
- This prevents unauthorized access at the routing level

**UI-Level Protection (Navbar):**
- The Navbar implements PoLP by conditionally showing dashboard links based on user role
- **Employee Dashboard**: Shown to all authenticated users (both employees and HR can access)
- **HR Dashboard**: Only shown to HR users (employees don't see this link)
- This prevents employees from seeing navigation options they can't use

**Why This Matters:**

**Without PoLP (Bad UX):**
```
Employee logs in → Sees "HR Dashboard" link → Clicks it → Gets redirected to login
Result: Confusion, frustration, poor user experience
```

**With PoLP (Good UX):**
```
Employee logs in → Only sees "Employee Dashboard" link → Can access it
HR logs in → Sees both dashboard links → Can access both
Result: Clear, intuitive, professional user experience
```

#### Academic Learning Objectives

Implementing PoLP demonstrates understanding of:

1. **Security Principles**: Applying security concepts to UI design
2. **UX Best Practices**: Creating interfaces that match user permissions
3. **Defense in Depth**: Multiple layers of protection (routes + UI)
4. **User-Centered Design**: Designing interfaces that respect user roles
5. **Professional Standards**: Following industry best practices for role-based applications

#### Code Example

The Navbar component (`src/layout/Navbar.jsx`) implements PoLP like this:

```jsx
{loggedIn && (
  <>
    {/* Shown to all authenticated users */}
    <Link to="/employee">Employee Dashboard</Link>
    
    {/* Only shown to HR users - PoLP implementation */}
    {getUserRole() === "hr" && (
      <Link to="/hr">HR Dashboard</Link>
    )}
  </>
)}
```

This ensures employees never see the HR Dashboard link, preventing confusion and following the Principle of Least Privilege.

#### Phase 2 Considerations

When Firebase Authentication is integrated in Phase 2, PoLP will continue to work the same way. The `getUserRole()` function will read from Firebase instead of localStorage, but the UI logic remains unchanged. This demonstrates proper abstraction - the UI layer doesn't need to know where role data comes from.

---

## 🧪 Running Locally

### Install dependencies:
```
npm install
```

### Start dev server:
```
npm run dev
```

### Build for production:
```
npm run build
```

---

## 🌐 Deployment Notes

### Vercel Configuration (`vercel.json`)

This project includes a comprehensive Vercel deployment configuration that explicitly defines the build process, output directory, and routing rules. This approach follows deployment best practices by making the build process transparent and maintainable.

#### Purpose of `vercel.json`

The `vercel.json` file configures how Vercel builds, deploys, and serves the application. While Vercel can auto-detect Vite projects, explicitly defining the configuration provides:

1. **Clarity**: Anyone can see exactly how the application is built and deployed
2. **Reliability**: Reduces dependency on auto-detection, which can fail or change
3. **Maintainability**: Makes it easier to debug deployment issues
4. **Documentation**: Serves as deployment documentation for the project
5. **Control**: Allows customization of build settings if needed

#### Configuration Breakdown

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Property Explanations:**

- **`buildCommand`**: The command Vercel runs to build the production version of the application. This executes `npm run build`, which runs Vite's build process (defined in `package.json`). Vite compiles React components, bundles assets, and optimizes the code for production.

- **`outputDirectory`**: Specifies where Vercel should look for the built files after the build command completes. Vite outputs to the `dist` directory by default, so this tells Vercel where to find the production-ready files to serve.

- **`devCommand`**: The command used for Vercel's preview deployments and development environments. This runs the Vite development server, which provides hot module replacement and fast refresh during development.

- **`installCommand`**: The command Vercel runs to install project dependencies before building. This ensures all npm packages (React, Vite, Bootstrap, etc.) are installed in the deployment environment.

- **`framework`**: Explicitly tells Vercel this is a Vite project. This enables framework-specific optimizations and ensures Vercel applies the correct build settings, caching strategies, and performance optimizations for Vite applications.

- **`rewrites`**: Critical for Single Page Applications (SPAs) using client-side routing. This rule tells Vercel to serve `index.html` for all routes, allowing React Router to handle navigation on the client side. Without this, direct URL access (e.g., `/employee` or `/hr`) would result in 404 errors because Vercel would look for those files on the server, which don't exist in an SPA.

#### Why Explicit Configuration Matters

**Without explicit configuration:**
- Vercel relies on auto-detection, which may fail or change
- Build process is hidden, making debugging difficult
- Less control over deployment settings
- Harder for team members to understand deployment

**With explicit configuration:**
- Build process is transparent and documented
- Easier to debug deployment issues
- More control over build settings
- Better for team collaboration and maintenance
- Demonstrates understanding of deployment best practices

#### Academic Learning Objectives

This configuration demonstrates understanding of:

1. **Deployment Best Practices**: Explicit configuration over implicit auto-detection
2. **SPA Routing**: Understanding how client-side routing requires server-side rewrite rules
3. **Build Processes**: Knowledge of how modern build tools (Vite) work and where output goes
4. **Infrastructure as Code**: Configuration files that define deployment behavior
5. **Documentation**: Making technical decisions explicit and understandable

#### Phase 2 Considerations

When Firebase is integrated in Phase 2, this configuration will remain largely unchanged. The build process stays the same - only the application code changes. The `rewrites` rule will continue to work correctly for React Router, and the build/output settings will remain valid.

---

See `/deployment-templates` folder for configs for **Netlify**, **Firebase**, **Apache**, **Nginx**, **GH Pages**, **CloudFront**, and more.

---

## 🎨 Theme System

Theme colors (from color.css):

```
--color-steel: #4A4F55;
--color-graphite: #1A1C1F;
--color-hazard: #E9C357;
--color-emergency: #C54139;
--color-text-light: #F2F2F2;
```

The app can be completely reskinned by editing only files in:

```
src/theme/
```

---

## 📸 Screenshots (Optional)
_Add screenshots of each page here for grading or portfolio use._

---

## 📄 License
MIT License — free to use, modify, distribute.

---

## ✨ Author
Developed by **JASYTI** as part of the **Full Stack Development with Generative AI** Capstone Project.
