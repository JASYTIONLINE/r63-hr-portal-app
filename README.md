# **HR Portal – Front-End Application**

A modern, responsive Human Resources management portal built with **React (19)** and **Vite (7)**.  
This project demonstrates full front-end development practices using **Bootstrap 5**, **Firebase Realtime Database**, and contemporary React conventions.

---

## ⚙️ **Modern React + Vite Conventions**

This repository follows current industry standards (React 19 / Vite 7):

1. **No manual `index.html` editing** – Vite manages the entry HTML internally.  
2. **`App.jsx` acts as the functional index page** – defines layout and routes.  
3. **`main.jsx` bootstraps React** – mounts the app with `ReactDOM.createRoot()`.  
4. **Organized file structure**
   ```
   src/
   ├── App.jsx          ← root-level layout and routes
   ├── main.jsx         ← entry point
   ├── pages/           ← routed pages (Login, HRDashboard, EmployeeDashboard)
   ├── components/      ← reusable UI (Navbar, Footer, etc.)
   ├── routes/          ← router configuration (router.jsx)
   ├── firebase.js      ← database configuration
   └── assets/          ← static assets
   ```
5. **Firebase Realtime Database** functions purely as a live JSON endpoint—no custom backend logic.  
6. **Bootstrap 5** ensures responsive, accessible design.  
7. **Exports appear at the bottom** of every file for clarity and scalability.

---

## 🧭 **Project Overview**

**Objective**  
Create a secure, user-friendly HR portal enabling:
- **Employees** to register, edit profiles, and submit leave requests.  
- **HR staff** to view profiles, manage data, and approve or deny requests.  

**Core Technologies**  
React | Vite | Bootstrap 5 | Firebase Realtime DB | JavaScript (ES6+)  

**Design Principles**  
CRAP (Contrast, Repetition, Alignment, Proximity) for visual consistency.

---

## 🚀 **Getting Started**

### **Installation**
```bash
# Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install
```

### **Development Server**
```bash
npm run dev
```
Open the printed local URL (typically `http://localhost:5173/`) in your browser.

### **Environment Setup**
Create a `.env` file in the project root with your Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=fs-hr-portal-db.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://fs-hr-portal-db-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=fs-hr-portal-db
```

---

## 🧩 **Feature Summary**

| Role | Key Functions |
|------|----------------|
| **Employee** | Register, edit profile, submit leave requests |
| **HR User** | View all employees, approve/deny leave requests |
| **Shared** | Responsive Bootstrap UI, real-time data sync via Firebase |

---

## 🏗️ **Work Breakdown Structure (WBS)**

### **1. Project Initialization**
- React + Vite setup  
- Dependencies (React Router, Bootstrap, Firebase)  
- Firebase configuration & connection test  
- Git initialization & first commit  

### **2. Base Structure & Routing**
- Create `/src/pages`, `/src/components`, `/src/routes`  
- Build initial pages: App, Login, EmployeeDashboard, HRDashboard  
- Configure React Router for `/`, `/login`, `/employee`, `/hr`

### **3. Firebase Integration**
- Connect `firebase.js` with `getDatabase(app)`  
- Implement CRUD for `/users` and `/leaveRequests`  
- Validate data sync and role-based access  

### **4. UI Design & Layout**
- Apply Bootstrap grid and utilities  
- Follow CRAP principles for visual hierarchy  
- Build Navbar, Footer, Cards, Forms  

### **5. Role Logic & Data Binding**
- Simulated login (matching email to role)  
- Conditional routing based on role  
- Bind Firebase data to React state and components  

### **6. Documentation & Version Control**
- Inline comments and README  
- Clear commit messages and Git workflow  

### **7. Testing & Presentation**
- Functional testing of CRUD and navigation  
- Responsive UI validation  
- Demo recording and submission package  

---

## 📦 **Deliverables**

| Phase | Deliverable | Output |
|-------|--------------|---------|
| 1.0 | Environment Setup | React + Vite app connected to Firebase |
| 2.0 | Core Structure | Routing and base pages completed |
| 3.0 | Database Integration | Live CRUD operations |
| 4.0 | UI Design | Responsive Bootstrap layout |
| 5.0 | Role Logic | HR and Employee dashboards |
| 6.0 | Documentation | README and inline comments |
| 7.0 | Testing | MVP ready for demo presentation |

---

## 🛠️ **Development Guidelines**

- Follow ES6+ syntax and modular React components.  
- Maintain clear separation between logic (pages) and UI (components).  
- Keep commit messages short, descriptive, and scoped.  
- Export functions and components at the bottom of each file.

---

## 🤝 **Contributing**

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/your-feature`  
3. Commit changes with descriptive messages  
4. Push and open a Pull Request  

---

## 📄 **License**

This project is distributed for educational and professional demonstration purposes.  
© 2025 Your Name — All Rights Reserved.
