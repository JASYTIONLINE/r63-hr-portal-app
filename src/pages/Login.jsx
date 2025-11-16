// ----------------------------------------------------
// Login.jsx (Final Version – Role Logic + Console Logs)
// ----------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Login() {
  const navigate = useNavigate();

  // Track username and role
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("employee");

  console.log("Login rendered");

  // Username typing log
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log("Username typed:", e.target.value);
  };

  // Role radio selection log
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log("Role selected:", e.target.value);
  };

  // Handle Login click
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("LOGIN BUTTON CLICKED");
    console.log("Username:", username);
    console.log("Role selected:", role);

    // Save role so dashboards know who is allowed in
    localStorage.setItem("role", role);
    console.log("Role saved to localStorage:", role);

    console.log("---- navigating now ----");

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
              onChange={(e) =>
                console.log("Password typed (not stored):", e.target.value)
              }
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
              Login
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
