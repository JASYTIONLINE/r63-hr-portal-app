# Capstone FSD Front-End with React (2025 Layout Architecture)

## ⚙️ Modern React + Vite Conventions (2025 Update)

(Annotation – Do Not Remove)

This project follows **current industry-standard React + Vite practices (React 19, Vite 7)**.

1. **No manual `index.html` editing** — Vite manages the entry HTML internally.  
2. **`App.jsx` is the functional “index page”** — it hosts layout and routes.  
3. **`main.jsx` bootstraps React** — it mounts the app using `ReactDOM.createRoot()`; no HTML edits required.  
4. **Component-driven design:** persistent layout components (Navbar, Hero, Footer) wrap a dynamic content region for all pages.  
5. **File structure:**

   ```
   src/
   ├── App.jsx          ← root-level router host
   ├── main.jsx         ← entry point
   ├── layout/          ← global layout wrapper (Layout.jsx)
   ├── components/      ← reusable UI (Navbar, Hero, Footer, Buttons)
   ├── pages/           ← page-specific content (Home, Login, Employee, HR)
   ├── routes/          ← router configuration (router.jsx)
   ├── firebase.js      ← database configuration
   └── assets/          ← static files
   ```
6. **Firebase Realtime Database** is used only as a live JSON endpoint; no backend logic.  
7. **Bootstrap 5** handles layout, spacing, and responsiveness.  
8. **Exports appear at the bottom of every file.**  

This annotation supersedes all legacy React + HTML patterns. Future updates and threads must follow this structure.

---

## 🚀 **Project Charter – HR Portal Front-End (Capstone Project)**

**Purpose / Objective**  
Develop a responsive, user-friendly HR Portal that enables employees to register, edit profiles, and submit leave requests, while allowing HR users to view, manage, and approve requests efficiently.

**Scope**

- Built with **HTML, CSS, JavaScript, React, Vite, Bootstrap, and Firebase Realtime Database**  
- Implements a **universal layout system** (Navbar, Hero, Footer) consistent across all pages  
- Uses a **dynamic content region** (`<Outlet />`) for page-specific displays  
- Applies **CRAP design principles** (Contrast, Repetition, Alignment, Proximity)  
- Integrates Firebase for live data storage and retrieval  
- Maintains version control with clear commit history and documentation  

---

## **Deliverables**

1. Persistent layout system (Navbar, Hero, Footer, Layout.jsx)  
2. Home page with Charter summary and “Enter Portal” CTA  
3. Login form (email-based simulated role login)  
4. Employee Dashboard (profile + leave request form)  
5. HR Dashboard (employee list + approvals)  
6. Firebase integration (read/write CRUD operations)  
7. Bootstrap design following CRAP principles  
8. Routing with React Router v7 (/, /login, /employee, /hr)  
9. Full inline documentation and GitHub history  
10. Working demo via `npm run dev`

---

## **Work Breakdown Structure (Revised 2025)**

### **1.0 Project Initialization**
1.1 Initialize React + Vite project  
1.2 Install dependencies (React Router, Bootstrap, Firebase)  
1.3 Configure Firebase project and `.env` variables  
1.4 Verify database connection (read test)  
1.5 Initialize Git and first commit  

---

### **2.0 Design & Wireframing**
2.1 Define global layout (Navbar, Hero, Footer, Dynamic Content)  
2.2 Create wireframes for Home, Login, Employee, HR pages  
2.3 Review for CRAP compliance and responsiveness  
2.4 Approve as site standard  

---

### **3.0 Component Architecture**
3.1 Build layout components  
  3.1.1 Navbar.jsx  
  3.1.2 Hero.jsx  
  3.1.3 Footer.jsx  
  3.1.4 Layout.jsx (wrapper with `<Outlet />`)  
3.2 Build reusable UI utilities  
  3.2.1 ActionButton.jsx  
  3.2.2 CardContainer.jsx (charter summary wrapper)  
3.3 Verify layout consistency across pages  

---

### **4.0 Page Content Development**
4.1 Home.jsx → Charter summary + CTA button  
4.2 Login.jsx → Simulated email + role selection  
4.3 EmployeeDashboard.jsx → Profile + leave request  
4.4 HRDashboard.jsx → Employee list + approval actions  
4.5 Confirm content renders correctly within layout  

---

### **5.0 Routing & Navigation**
5.1 Configure `router.jsx` with createBrowserRouter()  
5.2 Integrate `Layout.jsx` as root wrapper  
5.3 Add Navbar links and active states  
5.4 Verify navigation between routes  

---

### **6.0 Firebase Integration**
6.1 Connect `firebase.js` to Realtime Database  
6.2 Implement read/write for `/users` and `/leaveRequests`  
6.3 Add update/delete for HR actions  
6.4 Validate CRUD via console and UI  

---

### **7.0 UI Design & Styling**
7.1 Apply Bootstrap grid, spacing, and text utilities  
7.2 Enforce CRAP principles sitewide  
7.3 Ensure consistent responsiveness  

---

### **8.0 Documentation & Version Control**
8.1 Write paragraph-style inline comments  
8.2 Maintain Git commits per WBS phase  
8.3 Update README and architecture diagram  

---

### **9.0 Testing & Presentation**
9.1 Functional testing (navigation, CRUD, role logic)  
9.2 UI testing (alignment, responsiveness)  
9.3 Prepare demo walkthrough or screen recording  
9.4 Submit evaluation checklist and final push  

---

## **Deliverables Summary**

| Phase | Deliverable | Output |
|-------|--------------|--------|
| 1.0 | Environment Setup | Vite + React app connected to Firebase |
| 2.0 | Design & Wireframes | Approved layout and page prototypes |
| 3.0 | Component Architecture | Layout and reusable components built |
| 4.0 | Page Content | Home, Login, Employee, HR pages complete |
| 5.0 | Routing | Navigation verified across routes |
| 6.0 | Firebase Integration | CRUD working with live data |
| 7.0 | UI & Styling | Responsive Bootstrap layout |
| 8.0 | Documentation | Comments + README updated |
| 9.0 | Testing | MVP ready for demo |