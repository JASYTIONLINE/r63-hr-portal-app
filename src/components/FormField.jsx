// ============================================================================
// FormField.jsx
// ============================================================================
//
// PURPOSE:
// This component provides a reusable form input wrapper that standardizes
// form field structure across the application. It includes a label, input
// field, optional helper text, and error message display - all following
// Bootstrap's form validation patterns.
//
// DESIGN PATTERN:
// This component implements the "Controlled Component" pattern in React,
// where the parent component manages the input's value through props, and
// the FormField component calls onChange to notify the parent of changes.
// This ensures all form data flows through React state, making forms
// predictable and testable.
//
// BOOTSTRAP INTEGRATION:
// The component uses Bootstrap's form validation classes:
// - "form-control": Base input styling
// - "is-invalid": Applied when error prop is provided (shows red border)
// - "form-text": Helper text styling (gray, smaller text)
// - "invalid-feedback": Error message styling (red text below input)
//
// USAGE:
// This component is used throughout the application for all form inputs,
// ensuring consistent styling and behavior. It's particularly useful for
// login forms, profile forms, and leave request forms.
//
// PHASE 2 MIGRATION:
// When Firebase is integrated, this component will continue to work the
// same way. The validation logic (checking error prop) will remain
// unchanged, but the parent components will validate against Firebase
// rules and display errors accordingly.
//
// ============================================================================

import React from "react";

/**
 * Reusable form input wrapper with label, error, and helper text support.
 * 
 * This component provides a standardized form field structure that includes:
 * - A label (optional)
 * - An input field with Bootstrap styling
 * - Helper text for guidance (optional)
 * - Error message display with invalid styling (optional)
 * 
 * The component follows React's controlled component pattern, where the parent
 * manages the value and receives change notifications through onChange.
 * 
 * @param {string} label - Label text displayed above the input field. If not provided, no label is rendered.
 * @param {string} type - Input type (default: "text"). Common values: "text", "email", "date", "password", "number".
 * @param {string} value - Controlled input value. Must be managed by parent component's state.
 * @param {function} onChange - Change handler function. Receives the event object: `(e) => setValue(e.target.value)`
 * @param {string} placeholder - Placeholder text shown when input is empty (optional).
 * @param {string} className - Additional CSS classes to apply to the wrapper div (optional).
 * @param {string} error - Error message to display. When provided, input shows invalid styling (red border) and error text appears below (optional).
 * @param {string} helper - Helper text to display below input when no error is present. Used for guidance or instructions (optional).
 * 
 * @example
 * // Basic usage with controlled state
 * const [email, setEmail] = useState("");
 * 
 * <FormField
 *   label="Email Address"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   placeholder="Enter your email"
 * />
 * 
 * @example
 * // With validation error
 * const [email, setEmail] = useState("");
 * const [emailError, setEmailError] = useState("");
 * 
 * <FormField
 *   label="Email Address"
 *   type="email"
 *   value={email}
 *   onChange={(e) => {
 *     setEmail(e.target.value);
 *     setEmailError(""); // Clear error on change
 *   }}
 *   error={emailError}
 *   helper="Enter your company email address"
 * />
 * 
 * @example
 * // With helper text (no error)
 * <FormField
 *   label="Start Date"
 *   type="date"
 *   value={startDate}
 *   onChange={(e) => setStartDate(e.target.value)}
 *   helper="Select the first day of your leave"
 * />
 */
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
