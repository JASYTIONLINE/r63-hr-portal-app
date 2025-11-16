// ----------------------------------------------------
// router.jsx
// Defines all application routes.
// Wrapped in Layout so all pages share Nav/Hero/Footer.
// ----------------------------------------------------

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import EmployeeDashboard from "../pages/EmployeeDashboard.jsx";
import HRDashboard from "../pages/HRDashboard.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Layout />,
    children: [
      // Redirect root to login
      { index: true, element: <Navigate to="/login" replace /> },

      // Pages
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
      { 
        path: "employee", 
        element: (
          <ProtectedRoute requiredRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        )
      },
      { 
        path: "hr", 
        element: (
          <ProtectedRoute requiredRole="hr">
            <HRDashboard />
          </ProtectedRoute>
        )
      }
    ]
  }
]);
export default router;
