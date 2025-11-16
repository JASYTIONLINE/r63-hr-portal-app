// ----------------------------------------------------
// Navbar.jsx
// Global top navigation bar. Reusable across projects.
// Uses Bootstrap classes only. No business logic here.
// ----------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

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
