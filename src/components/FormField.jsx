// ----------------------------------------------------
// FormField.jsx
// Reusable form input wrapper.
// Includes label + input + optional helper/error text.
// Supports different input types and custom classes.
// ----------------------------------------------------

import React from "react";

function FormField({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  error = "",
  helper = ""
}) {
  return (
    <div className={`mb-3 ${className}`}>
      {/* Label */}
      {label && <label className="form-label fw-semibold">{label}</label>}

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />

      {/* Helper text */}
      {helper && !error && (
        <div className="form-text">{helper}</div>
      )}

      {/* Error text */}
      {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  );
}

export default FormField;
