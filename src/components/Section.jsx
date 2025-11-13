// ----------------------------------------------------
// Section.jsx
// Generic page section wrapper.
// Provides consistent spacing, optional title,
// and optional container wrapping.
// ----------------------------------------------------

import React from "react";

function Section({
  title = "",
  children,
  container = true,
  className = "",
  style = {}
}) {
  return (
    <section className={`py-4 ${className}`} style={style}>
      {/* Optional container wrapper */}
      {container ? (
        <div className="container">
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {children}
        </div>
      ) : (
        <>
          {title && <h2 className="fw-bold mb-3">{title}</h2>}
          {children}
        </>
      )}
    </section>
  );
}

export default Section;
