// ----------------------------------------------------
// Button.jsx
// Reusable button component.
// Wraps a Bootstrap button for consistent usage.
// Accepts text, click handler, and optional styling props.
// ----------------------------------------------------

import React from "react";

function Button({ children, onClick, variant = "primary", type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
