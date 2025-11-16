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

For React Router to work on Vercel, include:

```
vercel.json
```

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

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
