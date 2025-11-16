// ============================================================================
// router.jsx
// ============================================================================
//
// PURPOSE:
// This file defines the application's routing structure using React Router v7.
// It maps URL paths to React components, enabling client-side navigation
// without full page reloads (Single Page Application / SPA architecture).
//
// REACT ROUTER OVERVIEW:
// React Router is a library that enables navigation between different views
// in a React application. Instead of loading new HTML pages from the server,
// React Router updates the URL and renders different components based on the
// current route. This provides a faster, more seamless user experience.
//
// NESTED ROUTE STRUCTURE:
// This router uses a nested route pattern where all routes are children of
// a root Layout component. This means:
// 1. The Layout component (Navbar, Hero, Footer) wraps every page
// 2. Individual page components render inside the Layout's <Outlet />
// 3. This ensures consistent UI structure across all pages
//
// ROUTE PROTECTION STRATEGY:
// Protected routes (employee, hr) are wrapped with the ProtectedRoute
// component, which checks user authentication and role before rendering.
// Public routes (home, login) are accessible to everyone.
//
// PHASE 2 MIGRATION:
// When Firebase Authentication is integrated, the ProtectedRoute component
// will check Firebase Auth state instead of localStorage. The router
// configuration itself will not need changes.
//
// ============================================================================

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import EmployeeDashboard from "../pages/EmployeeDashboard.jsx";
import HRDashboard from "../pages/HRDashboard.jsx";

// ============================================================================
// ROUTER CONFIGURATION
// ============================================================================
// createBrowserRouter creates a router instance that uses the HTML5 History
// API to manage navigation. This enables clean URLs (e.g., /employee instead
// of /#/employee) and allows the browser's Back/Forward buttons to work
// correctly with client-side routing.
//
// The router configuration is an array of route objects. Each route defines:
// - path: The URL path that triggers this route
// - element: The React component to render when the path matches
// - children: Nested routes that render inside the parent route's element
// ============================================================================
const router = createBrowserRouter([
  {
    // Root path "/" - all routes are nested under this
    path: "/",
    
    // Layout component wraps all child routes
    // This means Navbar, Hero, and Footer appear on every page
    // Individual pages render inside Layout's <Outlet /> component
    element: <Layout />,
    
    // All application routes are defined as children of Layout
    children: [
      // ====================================================================
      // INDEX ROUTE (Root Redirect)
      // ====================================================================
      // When user visits the root URL ("/"), they are automatically
      // redirected to "/login". The 'index: true' means this route matches
      // when the parent path ("/") is accessed exactly.
      //
      // The 'replace' prop prevents adding the redirect to browser history,
      // so the Back button won't take users back to the root path.
      // ====================================================================
      { index: true, element: <Navigate to="/login" replace /> },

      // ====================================================================
      // PUBLIC ROUTES
      // ====================================================================
      // These routes are accessible to all users, regardless of
      // authentication status. No ProtectedRoute wrapper is needed.
      // ====================================================================
      
      // Home page - landing page with welcome message
      { path: "home", element: <Home /> },
      
      // Login page - authentication interface
      { path: "login", element: <Login /> },

      // ====================================================================
      // PROTECTED ROUTES
      // ====================================================================
      // These routes require authentication and specific roles. The
      // ProtectedRoute component checks localStorage for user role and
      // redirects to /login if unauthorized.
      //
      // Protection happens at the route level, meaning unauthorized users
      // never see the protected component render (no flash of content).
      // ====================================================================
      
      // Employee Dashboard - accessible to employees and HR
      // HR members are also employees, so they need access to employee
      // functionality. Using requiredRoles array allows multiple roles.
      { 
        path: "employee", 
        element: (
          <ProtectedRoute requiredRoles={["employee", "hr"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        )
      },
      
      // HR Dashboard - accessible only to HR users
      // Using requiredRole (string) for single-role protection.
      // Regular employees will be redirected to /login if they try to access.
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

// Export the router configuration for use in App.jsx
export default router;
