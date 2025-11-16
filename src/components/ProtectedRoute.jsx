// ============================================================================
// ProtectedRoute.jsx
// ============================================================================
//
// PURPOSE:
// This component provides route-level protection by verifying a user's role
// before rendering the target route component. It prevents unauthorized users
// from viewing protected pages, even if they type the URL directly.
//
// WHY ROUTE-LEVEL PROTECTION (PHASE 1):
// - Security UX: Stops the brief "flash" of protected content that can occur
//   when protection is done inside components after render.
// - Separation of Concerns: Keeps access control in routing, business logic
//   in pages/components. This improves readability and maintainability.
// - Reusability: One wrapper protects many routes, following DRY principles.
//
// PHASE 2 MIGRATION (FIREBASE READY):
// - This component relies on the abstracted getUserRole() helper. When we
//   move to Firebase Auth + Realtime Database, only the helper's internals
//   change. ProtectedRoute itself does not need edits.
//
// HOW TO USE:
// Wrap any protected route element:
//   <ProtectedRoute requiredRole="hr">
//     <HRDashboard />
//   </ProtectedRoute>
//   OR (for multiple roles):
//   <ProtectedRoute requiredRoles={["employee", "hr"]}>
//     <EmployeeDashboard />
//   </ProtectedRoute>
// If the user has no role or a mismatched role, they are redirected to /login.
//
// MULTIPLE ROLES SUPPORT:
// The component accepts either requiredRole (string) or requiredRoles (array).
// This allows routes to be accessible by multiple roles (e.g., HR members can
// access employee routes since they are also employees). This structure is
// Firebase-ready for Phase 2 where users may have multiple roles.
//
// ============================================================================

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/authHelper";

function ProtectedRoute({ children, requiredRole, requiredRoles }) {
  // ========================================================================
  // NORMALIZE ROLE REQUIREMENTS
  // ========================================================================
  // Support both requiredRole (string) and requiredRoles (array) for backward
  // compatibility and flexibility. Normalize to array internally for consistent
  // checking logic. This allows:
  // - Single role: requiredRole="hr" → ["hr"]
  // - Multiple roles: requiredRoles={["employee", "hr"]} → ["employee", "hr"]
  //
  // This structure is Firebase-ready: in Phase 2, routes can easily specify
  // multiple allowed roles, and Firebase users with any of those roles can access.
  // ========================================================================
  const allowedRoles = requiredRoles || (requiredRole ? [requiredRole] : []);

  // ========================================================================
  // REACTIVE ROLE CHECKING
  // ========================================================================
  // We use useState to store the current role and useEffect to keep it
  // synchronized with localStorage. This ensures the component re-renders
  // when authentication state changes, even if the route doesn't change.
  //
  // Why useState + useEffect instead of just calling getUserRole() directly?
  // - Makes the component reactive to localStorage changes
  // - Ensures fresh checks on every route navigation
  // - Prepares for Phase 2 where we'll listen to Firebase Auth state changes
  // ========================================================================
  const [currentRole, setCurrentRole] = useState(getUserRole());

  // Update role state whenever the component mounts or when localStorage changes
  useEffect(() => {
    // Check role on mount and whenever route changes
    const role = getUserRole();
    setCurrentRole(role);

    // Listen for storage events (cross-tab) and custom events (same-tab)
    const handleStorageChange = () => {
      const newRole = getUserRole();
      setCurrentRole(newRole);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("loginStateChange", handleStorageChange);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("loginStateChange", handleStorageChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  // ========================================================================
  // ALWAYS CHECK LATEST ROLE ON RENDER
  // ========================================================================
  // We check localStorage directly on every render to ensure we have the
  // absolute latest value. This is critical because:
  // 1. React Router might reuse component instances between route changes
  // 2. localStorage can change outside of React's state management
  // 3. We need immediate protection, not delayed state updates
  //
  // We use this direct check for the actual protection logic, while useState
  // helps with reactivity to events.
  // ========================================================================
  const roleToCheck = getUserRole();

  // Debug logging to help diagnose route protection issues
  console.log("ProtectedRoute check:", {
    currentRole,
    roleToCheck,
    allowedRoles,
    isAuthenticated: roleToCheck !== null,
    hasAccess: allowedRoles.includes(roleToCheck)
  });

  // ========================================================================
  // UNAUTHENTICATED USER
  // ========================================================================
  // If no role is stored in localStorage, the user is not logged in.
  // Redirect them to the login page immediately.
  //
  // The 'replace' prop prevents adding this redirect to browser history,
  // so the Back button won't take users back to the protected page they
  // tried to access.
  // ========================================================================
  if (!roleToCheck) {
    console.log("ProtectedRoute: User not authenticated, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  // ========================================================================
  // ROLE CHECK - MULTIPLE ROLES SUPPORT
  // ========================================================================
  // Check if the user's role is in the allowed roles array. This supports:
  // - Single role routes: allowedRoles = ["hr"] → only HR can access
  // - Multiple role routes: allowedRoles = ["employee", "hr"] → both can access
  //
  // This allows HR members to access employee routes (since HR members are
  // also employees), while still protecting HR-only routes from regular employees.
  //
  // Phase 2 Migration: When Firebase is integrated, this same logic will work
  // with Firebase user roles. Only authHelper.js needs to change to read from
  // Firebase instead of localStorage.
  // ========================================================================
  if (allowedRoles.length > 0 && !allowedRoles.includes(roleToCheck)) {
    console.log(
      `ProtectedRoute: User role "${roleToCheck}" not in allowed roles [${allowedRoles.join(", ")}], redirecting to /login`
    );
    return <Navigate to="/login" replace />;
  }

  // ========================================================================
  // AUTHORIZED USER
  // ========================================================================
  // The user is authenticated and has the correct role. Render the protected
  // content (the child component passed to ProtectedRoute).
  // ========================================================================
  console.log("ProtectedRoute: User authorized, rendering protected content");
  return children;
}

export default ProtectedRoute;


