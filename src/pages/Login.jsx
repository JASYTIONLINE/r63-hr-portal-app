// ============================================================================
// Login.jsx
// ============================================================================
//
// PURPOSE:
// This component provides the authentication interface for the HR Portal.
// Users enter credentials (username and password) and select their role
// (Employee or HR) to access the appropriate dashboard.
//
// AUTHENTICATION APPROACH (Phase 1):
// This is a simulated authentication system. In a real application, credentials
// would be validated against a backend database. For this Capstone project,
// we simulate authentication by:
// 1. Requiring username and password fields to be filled (form validation)
// 2. Storing the selected role in localStorage
// 3. Using that role for route protection (see ProtectedRoute.jsx)
//
// WHY FORM VALIDATION IS IMPORTANT:
// Without validation, users could submit empty forms and bypass the login
// requirement entirely. This would undermine the route protection system,
// allowing unauthorized access. Form validation ensures users must at least
// provide credentials before accessing protected routes, even if those
// credentials aren't verified against a real database in Phase 1.
//
// PHASE 2 MIGRATION:
// When Firebase Authentication is integrated, this component will:
// 1. Call Firebase Auth to verify credentials
// 2. Retrieve user role from Firebase Realtime Database
// 3. Store authentication token instead of just role
// The form validation pattern will remain the same.
//
// ============================================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  // ========================================================================
  // STATE MANAGEMENT
  // ========================================================================
  // These state variables track the form inputs. Using controlled components
  // (value + onChange) ensures React manages the form state, making validation
  // and form handling predictable and reliable.
  // ========================================================================

  // Username input state - tracks what the user types in the username field
  const [username, setUsername] = useState("");

  // Password input state - tracks what the user types in the password field
  // In Phase 1, this is stored but not validated. In Phase 2, it will be
  // sent to Firebase Auth for verification.
  const [password, setPassword] = useState("");

  // Role selection state - tracks which radio button is selected
  // Defaults to "employee" so the form always has a valid role selected
  const [role, setRole] = useState("employee");

  console.log("Login rendered");

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================
  // These functions handle user interactions with form elements. They update
  // the component state, which triggers React to re-render the form with
  // updated values (controlled component pattern).
  // ========================================================================

  // Handles changes to the username input field
  // Updates the username state whenever the user types
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log("Username typed:", e.target.value);
  };

  // Handles changes to the password input field
  // Updates the password state whenever the user types
  // Note: In Phase 1, password is stored in state but not validated against
  // a database. In Phase 2, this value will be sent to Firebase Auth.
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("Password typed (not stored):", e.target.value);
  };

  // Handles changes to the role radio buttons
  // Updates the role state when user selects Employee or HR
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log("Role selected:", e.target.value);
  };

  // ========================================================================
  // LOGIN SUBMISSION HANDLER
  // ========================================================================
  // This function is called when the user clicks the Submit button or presses
  // Enter in the form. It performs validation, saves authentication state,
  // and navigates to the appropriate dashboard.
  //
  // VALIDATION LOGIC:
  // Before proceeding with login, we check that both username and password
  // fields contain values. The .trim() method removes whitespace, so fields
  // with only spaces are considered empty. This prevents users from bypassing
  // the login requirement by submitting empty or whitespace-only fields.
  //
  // WHY THIS VALIDATION MATTERS:
  // Without this check, users could click Submit with empty fields, which
  // would still save the role to localStorage and navigate to a protected
  // route. This would effectively bypass the login requirement and undermine
  // the route protection system. By requiring both fields, we ensure users
  // must at least provide credentials, even if they aren't validated against
  // a real database in Phase 1.
  // ========================================================================
  const handleLogin = (e) => {
    // Prevent default form submission behavior (page reload)
    // This keeps us in the React SPA without a full page refresh
    e.preventDefault();

    console.log("LOGIN BUTTON CLICKED");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Role selected:", role);

    // ====================================================================
    // FORM VALIDATION
    // ====================================================================
    // Check if username or password fields are empty (after removing
    // whitespace). If either is empty, show an alert and stop execution.
    // This prevents users from bypassing the login form by submitting
    // empty fields.
    //
    // The .trim() method removes leading and trailing whitespace, so
    // fields containing only spaces are treated as empty. This is important
    // because users might accidentally submit forms with spaces, or
    // intentionally try to bypass validation.
    // ====================================================================
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password before submitting.");
      // Return early - stop the function here, don't proceed with login
      // This prevents saving role to localStorage and navigating to
      // protected routes when credentials are missing
      return;
    }

    // ====================================================================
    // AUTHENTICATION STATE STORAGE (Phase 1)
    // ====================================================================
    // Save the selected role to localStorage. This role will be used by
    // ProtectedRoute components to determine if the user can access
    // protected routes.
    //
    // In Phase 1, we only store the role. In Phase 2 with Firebase,
    // we would also store an authentication token and user ID.
    //
    // Note: We don't store the username or password in localStorage for
    // security reasons. Only the role is needed for route protection.
    // ====================================================================
    localStorage.setItem("role", role);
    console.log("Role saved to localStorage:", role);

    // ====================================================================
    // NOTIFY NAVBAR OF LOGIN STATE CHANGE
    // ====================================================================
    // Dispatch a custom event to notify the Navbar component that the
    // authentication state has changed. This allows the Navbar to update
    // from "Login" to "Logout" immediately after login, without requiring
    // a page refresh or navigation.
    //
    // The Navbar listens for this event and updates its state accordingly.
    // This provides a reactive UI that reflects authentication changes
    // across the application.
    // ====================================================================
    window.dispatchEvent(new Event("loginStateChange"));

    console.log("---- navigating now ----");

    // ====================================================================
    // ROLE-BASED NAVIGATION
    // ====================================================================
    // Navigate to the appropriate dashboard based on the selected role.
    // Each dashboard is protected by ProtectedRoute, which will verify
    // the role matches before allowing access.
    //
    // The navigate() function from React Router updates the URL and
    // triggers route matching without a full page reload (client-side
    // navigation).
    // ====================================================================
    if (role === "employee") navigate("/employee");
    else if (role === "hr") navigate("/hr");
  };

  // Handle SignUp click — must exist to stop runtime errors
  const handleSignup = () => {
    console.log("SIGN UP CLICKED");
    alert("Sign Up not implemented in this demo.");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="border rounded p-4 shadow-sm bg-light"
        style={{ width: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Role Selector */}
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Role:</label>
            <br />

            {/* Employee */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="employee"
                value="employee"
                checked={role === "employee"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label" htmlFor="employee">
                Employee
              </label>
            </div>

            {/* HR */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                id="hr"
                value="hr"
                checked={role === "hr"}
                onChange={handleRoleChange}
              />
              <label className="form-check-label" htmlFor="hr">
                HR
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <button type="button" className="btn btn-link" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
