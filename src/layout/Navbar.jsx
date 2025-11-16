// ============================================================================
// Navbar.jsx
// ============================================================================
//
// PURPOSE:
// Global top navigation bar that appears on all pages. Provides consistent
// navigation throughout the application and adapts based on user
// authentication state.
//
// CONDITIONAL RENDERING:
// The Navbar checks if a user is logged in and displays either "Login" or
// "Logout" accordingly. This provides better UX by showing the appropriate
// action based on authentication state.
//
// AUTHENTICATION STATE:
// Uses the isAuthenticated() helper from authHelper.js to check if a user
// has a role stored in localStorage. This is checked on component mount and
// when the component re-renders, ensuring the Navbar reflects current auth
// state.
//
// LOGOUT FUNCTIONALITY:
// When the user clicks "Logout", it clears the role from localStorage and
// redirects to the login page. This effectively logs the user out and
// prevents access to protected routes until they log in again.
//
// PHASE 2 MIGRATION:
// When Firebase Authentication is integrated, logout will also sign out
// from Firebase Auth, not just clear localStorage. The conditional rendering
// pattern will remain the same.
//
// ============================================================================

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authHelper";

function Navbar() {
  const navigate = useNavigate();

  // ========================================================================
  // AUTHENTICATION STATE TRACKING
  // ========================================================================
  // Track whether the user is currently logged in. This state determines
  // whether to show "Login" or "Logout" in the navigation.
  //
  // We use useState to store the auth state and useEffect to:
  // 1. Check auth state when component mounts
  // 2. Listen for localStorage changes (when user logs in/out on other pages)
  //
  // The storage event listener ensures the Navbar updates automatically when
  // the user logs in or out, even if the login happens on a different page.
  // This provides a reactive UI that always reflects the current auth state.
  // ========================================================================
  const [loggedIn, setLoggedIn] = useState(false);

  // Check authentication state when component mounts and listen for changes
  useEffect(() => {
    // Check initial auth state
    setLoggedIn(isAuthenticated());

    // Listen for localStorage changes (when user logs in/out)
    // This makes the Navbar reactive to auth state changes across the app
    const handleStorageChange = () => {
      setLoggedIn(isAuthenticated());
    };

    // Listen for storage events (triggered when localStorage changes)
    window.addEventListener("storage", handleStorageChange);

    // Also listen for custom events (for same-tab updates)
    // When logout happens in this component, we update state directly,
    // but this listener helps if login happens elsewhere
    window.addEventListener("loginStateChange", handleStorageChange);

    // Cleanup: remove event listeners when component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("loginStateChange", handleStorageChange);
    };
  }, []);

  // ========================================================================
  // LOGOUT HANDLER
  // ========================================================================
  // When the user clicks "Logout", this function:
  // 1. Clears the role from localStorage (removes authentication state)
  // 2. Updates the loggedIn state to false (updates UI immediately)
  // 3. Redirects to the login page
  //
  // In Phase 2 with Firebase, this will also call Firebase Auth's signOut()
  // method to properly terminate the Firebase session.
  // ========================================================================
  const handleLogout = (e) => {
    e.preventDefault();
    
    // Clear authentication state from localStorage
    localStorage.removeItem("role");
    
    // Update UI state immediately
    setLoggedIn(false);
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/home">
          HR Portal
        </Link>

        {/* Toggler (mobile menu) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>

            {/* Conditional Login/Logout Link */}
            {/* If user is logged in, show "Logout" button. If not logged in,
                show "Login" link. This provides better UX by showing the
                appropriate action based on authentication state. */}
            {loggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/employee">
                Employee Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/hr">
                HR Dashboard
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
