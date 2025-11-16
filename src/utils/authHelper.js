// ============================================================================
// authHelper.js
// ============================================================================
// 
// PURPOSE:
// This utility module abstracts authentication and role checking logic from
// the rest of the application. This separation of concerns is a fundamental
// software engineering principle that makes code more maintainable and
// testable.
//
// WHY THIS APPROACH:
// 1. Single Source of Truth: All role checking happens in one place, making
//    it easier to debug and modify authentication logic.
// 2. Phase 2 Migration Ready: When we integrate Firebase Authentication in
//    Phase 2, we only need to update this file, not every component that
//    checks roles. This demonstrates understanding of abstraction layers.
// 3. Testability: Isolating auth logic makes it easier to write unit tests
//    for route protection and role-based features.
// 4. Academic Learning Objective: This pattern demonstrates understanding of
//    the Dependency Inversion Principle - high-level components (routes,
//    dashboards) depend on abstractions (this helper), not concrete
//    implementations (localStorage directly).
//
// PHASE 1 IMPLEMENTATION:
// Currently uses localStorage to simulate authentication. This is acceptable
// for the Capstone requirements which state "Front-end simulation is acceptable"
// for role-based access control (Task 4).
//
// PHASE 2 MIGRATION PATH:
// When Firebase Authentication is integrated, this function will be updated to:
// 1. Check Firebase Auth for current user
// 2. Query Firebase Realtime Database for user's role
// 3. Return the role from the database
// The rest of the application (ProtectedRoute, components) will continue
// working without modification, demonstrating proper abstraction.
//
// ============================================================================

/**
 * Retrieves the current user's role from the authentication system.
 * 
 * In Phase 1, this reads from localStorage which simulates a logged-in user's
 * role. The role is set during login (see Login.jsx) and persists across
 * page refreshes.
 * 
 * @returns {string|null} The user's role ("employee" or "hr") or null if
 *                        no role is stored (user not logged in).
 */
export const getUserRole = () => {
  // localStorage.getItem() returns a string or null if the key doesn't exist.
  // This handles both logged-in users (who have a role) and users who haven't
  // logged in yet (who will have null).
  return localStorage.getItem("role");
};

/**
 * Checks if a user is currently authenticated (has a role stored).
 * 
 * This is a convenience function that wraps getUserRole() to provide a
 * boolean check. It's useful for conditional rendering and route protection
 * where you only need to know if someone is logged in, not their specific role.
 * 
 * @returns {boolean} True if user has a role stored, false otherwise.
 */
export const isAuthenticated = () => {
  // A user is considered authenticated if they have any role stored.
  // In Phase 1, this means they've completed the login flow.
  // In Phase 2, this will check Firebase Auth instead.
  return getUserRole() !== null;
};

/**
 * Checks if the current user has a specific role.
 * 
 * This function provides a clean way to check role membership without
 * directly comparing strings throughout the codebase. It centralizes role
 * comparison logic, making it easier to handle edge cases (like case
 * sensitivity) in one place.
 * 
 * @param {string} role - The role to check for ("employee" or "hr").
 * @returns {boolean} True if the current user has the specified role.
 */
export const hasRole = (role) => {
  // Strict equality (===) ensures type safety - we're comparing strings,
  // not doing type coercion. This prevents bugs from unexpected type
  // conversions.
  return getUserRole() === role;
};
