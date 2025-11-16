// ----------------------------------------------------
// Card.jsx
// Reusable Bootstrap card wrapper.
// Accepts title, children, and optional styling.
// Keeps your UI modular and easy to reskin.
// ----------------------------------------------------

import React from "react";

function Card({ title, children, className = "", style = {} }) {
  return (
    <div className={`card shadow-sm p-4 ${className}`} style={style}>
      {title && <h4 className="fw-bold mb-3 text-center">{title}</h4>}
      {children}
    </div>
  );
}

export default Card;
