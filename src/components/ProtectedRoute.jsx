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
// If the user has no role or a mismatched role, they are redirected to /login.
//
// ============================================================================

import React from "react";
import { Navigate } from "react-router-dom";
import { getUserRole } from "../utils/authHelper";

function ProtectedRoute({ children, requiredRole }) {
  // Determine the current user's role. In Phase 1 this comes from localStorage.
  // In Phase 2 it will come from Firebase via the same helper, unchanged here.
  const currentRole = getUserRole();

  // Not authenticated: send to login. 'replace' avoids polluting history so
  // the Back button won't loop the user through protected pages.
  if (!currentRole) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated but wrong role: also redirect to login. For an enterprise
  // app, this might go to a dedicated "Access Denied" page.
  if (requiredRole && currentRole !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  // Authorized: render the protected content.
  return children;
}

export default ProtectedRoute;


