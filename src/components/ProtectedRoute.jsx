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

import React from "react";
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
  // DIRECT ROLE CHECK ON RENDER
  // ========================================================================
  // We check localStorage directly on every render to ensure we have the
  // absolute latest value. This approach is simpler and more efficient than
  // maintaining state because:
  //
  // 1. Immediate Protection: The check happens synchronously on every render,
  //    ensuring protection is always up-to-date without waiting for state updates.
  //
  // 2. React Router Navigation: When users navigate between routes, React Router
  //    will re-render this component, triggering a fresh role check automatically.
  //    This means protection works correctly even if localStorage changes between
  //    route navigations.
  //
  // 3. Simplicity: No state management overhead, no event listeners, no cleanup
  //    needed. The component is easier to understand and maintain.
  //
  // 4. Phase 1 Sufficiency: For Phase 1's simulated authentication, this direct
  //    check is sufficient. Users will be re-checked on every route navigation,
  //    which covers the primary use case.
  //
  // Note: This approach may not immediately reflect cross-tab localStorage
  // changes (e.g., logging out in another browser tab). However, for Phase 1,
  // this is acceptable. In Phase 2 with Firebase, we'll use Firebase Auth
  // listeners which provide real-time cross-tab synchronization automatically.
  // ========================================================================
  const roleToCheck = getUserRole();

  // Debug logging to help diagnose route protection issues
  console.log("ProtectedRoute check:", {
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


