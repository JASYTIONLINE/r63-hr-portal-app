// ----------------------------------------------------
// Component: [ComponentName].jsx
// Description:
// This file defines a reusable React component for the HR Portal Front-End.
// Each component follows JASYTI coding conventions:
// - React functional syntax (no class components)
// - Bootstrap 5 utility classes for layout and style
// - Paragraph-style comments explaining purpose and logic
// - Exports at bottom for consistent structure
// ----------------------------------------------------

// Import core React dependencies
import React from "react";

// Import Bootstrap (if needed for isolated components)
// Note: main.jsx already includes Bootstrap globally.
// Import only if this component is used standalone outside Layout.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// ----------------------------------------------------
// Functional Component Definition
// ----------------------------------------------------

// Simple component to verify React + Vite rendering works

function HelloWorld() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Hello, World!</h1>
      <p>The React + Vite environment is working.</p>
    </div>
  );
}

// Export at the bottom for consistency and scalability
export default HelloWorld;
