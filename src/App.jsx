// ============================================================================
// App.jsx
// ============================================================================
//
// PURPOSE:
// This is the root component of the React application. It serves as the entry
// point where React Router is initialized and the routing system is activated.
// App.jsx is intentionally minimal - it delegates all functionality to the
// router configuration and individual page components.
//
// ROOT COMPONENT PATTERN:
// In React applications, the root component (App) typically has one primary
// responsibility: setting up the application's core infrastructure. In this
// case, that infrastructure is React Router. All other concerns (routing logic,
// page components, authentication) are handled by their respective modules.
//
// This follows the Single Responsibility Principle - App.jsx has one job:
// provide the router to the application. This makes the codebase easier to
// understand and maintain.
//
// ROUTER PROVIDER:
// RouterProvider is a React Router component that makes the router instance
// available to all components in the application tree. When you use React
// Router hooks (like useNavigate, useParams, Link) in any component, they
// access the router through this provider.
//
// The router instance (imported from router.jsx) contains all route
// definitions, protection logic, and navigation configuration. By passing
// it to RouterProvider, we activate the entire routing system.
//
// WHY SO SIMPLE?
// App.jsx is intentionally minimal because:
// 1. Separation of Concerns: Routing logic lives in router.jsx, not here
// 2. Layout Structure: The Layout component (in router.jsx) handles page
//    structure, not App
// 3. Page Logic: Individual page components handle their own functionality
// 4. Maintainability: Keeping App simple makes it easy to understand the
//    application's entry point
//
// COMPONENT HIERARCHY:
// The component tree flows like this:
// main.jsx → App.jsx → RouterProvider → Layout (from router) → [Page Components]
//
// App.jsx sits in the middle, connecting the React DOM renderer (main.jsx)
// with the routing system (router.jsx).
//
// PHASE 2 MIGRATION:
// This component will remain unchanged in Phase 2. The RouterProvider pattern
// works the same way with Firebase authentication - only the router
// configuration and ProtectedRoute components need updates.
//
// ============================================================================

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

// ============================================================================
// ROOT APPLICATION COMPONENT
// ============================================================================
// This component initializes React Router by providing the router configuration
// to the RouterProvider. Once this is rendered, all routing functionality
// becomes available throughout the application.
//
// RouterProvider:
// - Takes the router configuration as a prop
// - Makes routing context available to all child components
// - Handles route matching and component rendering
// - Manages browser history and navigation
// ============================================================================
function App() {
  return (
    // RouterProvider activates the routing system defined in router.jsx
    // All route definitions, protection, and navigation flow from here
    <RouterProvider router={router} />
  );
}

export default App;
