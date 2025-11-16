// ============================================================================
// Button.jsx
// ============================================================================
//
// PURPOSE:
// This component provides a reusable button wrapper that standardizes button
// styling across the application. It wraps Bootstrap's button classes and
// provides a consistent API for creating buttons with different variants,
// types, and custom styling.
//
// DESIGN PATTERN:
// This component follows the "Wrapper Component" pattern, where a simple
// component wraps a native HTML element (or another component) to provide
// a consistent interface and reduce code duplication. All buttons in the
// application use this component, ensuring consistent styling and behavior.
//
// BOOTSTRAP INTEGRATION:
// The component uses Bootstrap's button classes:
// - "btn": Base button class required for all Bootstrap buttons
// - "btn-{variant}": Variant class (primary, secondary, success, danger, etc.)
// - Custom className: Additional classes can be passed for specific styling
//
// DEFENSIVE PROGRAMMING:
// The className construction uses defensive programming to handle edge cases:
// - Validates that variant is truthy before using it (prevents "btn-undefined")
// - Handles className being undefined/null by defaulting to empty string
// - Trims the final className to remove any extra whitespace
// This ensures invalid CSS class names are never created, even if props are
// passed incorrectly from parent components.
//
// USAGE:
// This component is used throughout the application for all buttons, ensuring
// consistent styling and behavior. It's used in forms, modals, navigation, and
// action buttons across all pages.
//
// PHASE 2 MIGRATION:
// When Firebase is integrated, this component will continue to work the same
// way. The button styling and behavior remain unchanged - only the onClick
// handlers will interact with Firebase instead of console.log.
//
// ============================================================================

import React from "react";

/**
 * Reusable button component with Bootstrap styling and variant support.
 * 
 * This component provides a standardized button interface that wraps Bootstrap's
 * button classes. It handles variant validation and className construction
 * defensively to prevent invalid CSS class names.
 * 
 * @param {React.ReactNode} children - Button content (text, icons, etc.)
 * @param {function} onClick - Click handler function (optional)
 * @param {string} variant - Bootstrap button variant (default: "primary"). Valid values: primary, secondary, success, danger, warning, info, light, dark
 * @param {string} type - HTML button type (default: "button"). Valid values: button, submit, reset
 * @param {string} className - Additional CSS classes to apply (optional)
 * 
 * @example
 * // Basic button
 * <Button onClick={handleClick}>Click Me</Button>
 * 
 * @example
 * // Button with variant
 * <Button variant="danger" onClick={handleDelete}>Delete</Button>
 * 
 * @example
 * // Button with custom classes
 * <Button className="w-100 mt-3" onClick={handleSubmit}>Submit</Button>
 */
function Button({ children, onClick, variant = "primary", type = "button", className = "" }) {
  // ========================================================================
  // DEFENSIVE CLASSNAME CONSTRUCTION
  // ========================================================================
  // This code ensures valid CSS class names are always created, even if props
  // are passed incorrectly. It handles edge cases where variant or className
  // might be undefined, null, or empty.
  //
  // Why this matters:
  // - If variant is undefined/null, template strings create "btn-undefined"
  // - If className is undefined, template strings create "btn-primary undefined"
  // - Invalid class names don't break the app but create unnecessary DOM
  //   attributes and make debugging harder
  //
  // The fix:
  // - Validates variant is truthy before using it (falls back to "primary")
  // - Ensures className is always a string (defaults to empty string)
  // - Trims final result to remove any extra whitespace
  // ========================================================================
  const variantClass = variant ? `btn-${variant}` : 'btn-primary';
  const additionalClasses = className || '';
  const finalClassName = `btn ${variantClass} ${additionalClasses}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClassName}
    >
      {children}
    </button>
  );
}

export default Button;
