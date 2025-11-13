// ----------------------------------------------------
// main.jsx
// Application entry point. Mounts the App component.
// Loads Bootstrap globally. No business logic here.
// ----------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme/color.css";
import "./index.css";
import "./theme/overrides.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
