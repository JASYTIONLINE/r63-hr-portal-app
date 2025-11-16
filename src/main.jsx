// ============================================================================
// main.jsx
// ============================================================================
//
// PURPOSE:
// This is the application's entry point - the first JavaScript file that
// executes when the application loads. It's responsible for:
// 1. Rendering the React application into the HTML DOM
// 2. Loading global styles and libraries (Bootstrap, custom CSS)
// 3. Initializing the React application with App.jsx as the root component
//
// ENTRY POINT CONCEPT:
// In modern JavaScript applications, there's always an entry point file that
// serves as the starting point for the application. When the browser loads
// index.html, it executes this file (main.jsx), which then bootstraps the
// entire React application.
//
// The entry point is intentionally simple - it doesn't contain business logic,
// routing, or UI components. Its sole responsibility is to "mount" (attach)
// the React application to the DOM and load global dependencies.
//
// REACT DOM RENDERING:
// ReactDOM is the library that connects React components to the browser's DOM
// (Document Object Model). The createRoot() method creates a root container
// where React will render components, and render() actually renders the
// App component into that container.
//
// The process:
// 1. document.getElementById("root") finds the <div id="root"> in index.html
// 2. createRoot() tells React to use that div as the rendering container
// 3. render() renders the App component (and all its children) into that div
// 4. React takes over and manages all subsequent updates
//
// REACT STRICT MODE:
// <React.StrictMode> is a development tool that helps identify potential
// problems in the application. It:
// - Detects components with unsafe lifecycles
// - Warns about legacy string ref API usage
// - Warns about deprecated findDOMNode usage
// - Detects unexpected side effects
// - Detects legacy context API
//
// StrictMode doesn't render any visible UI - it's a wrapper that enables
// additional checks and warnings. In production builds, these checks are
// automatically disabled for performance.
//
// GLOBAL IMPORTS:
// These imports load resources that are available throughout the entire
// application:
// - Bootstrap CSS/JS: Provides the UI framework (buttons, cards, forms, etc.)
// - Custom theme files: Application-specific styling and color schemes
//
// These are imported here (not in individual components) because they need
// to be loaded once, globally, before any components render.
//
// PHASE 2 MIGRATION:
// This file will remain largely unchanged in Phase 2. We may add Firebase
// initialization here, but the core rendering pattern stays the same.
//
// ============================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// ============================================================================
// GLOBAL STYLES AND LIBRARIES
// ============================================================================
// These imports load resources that are available application-wide:
//
// Bootstrap: UI framework providing pre-built components and utilities
// - CSS: Styles for buttons, cards, forms, navigation, etc.
// - JS: Interactive components (modals, dropdowns, etc.)
//
// Custom Theme: Application-specific styling
// - color.css: Custom color palette and theme variables
// - index.css: Base styles and resets
// - overrides.css: Customizations that override Bootstrap defaults
//
// These must be imported before App renders so styles are available
// immediately when components mount.
// ============================================================================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme/color.css";
import "./theme/index.css";
import "./theme/overrides.css";

// ============================================================================
// REACT APPLICATION RENDERING
// ============================================================================
// This is where the React application is "mounted" to the DOM. The process:
//
// 1. document.getElementById("root") - Finds the container div in index.html
// 2. createRoot() - Creates a React root container for this DOM element
// 3. render() - Renders the App component (and all children) into the root
//
// Once rendered, React takes control and manages all UI updates through its
// virtual DOM system. The application is now fully interactive.
//
// React.StrictMode wraps the App component to enable additional development
// checks and warnings. It has no effect in production builds.
// ============================================================================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
