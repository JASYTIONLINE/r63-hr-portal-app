import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Login() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="border rounded p-4 shadow-sm bg-light" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <form>
          <div className="mb-3 text-start">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-control" placeholder="Enter username" />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Role:</label><br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="role" id="employee" value="employee" defaultChecked />
              <label className="form-check-label" htmlFor="employee">Employee</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="role" id="hr" value="hr" />
              <label className="form-check-label" htmlFor="hr">HR</label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-link">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
