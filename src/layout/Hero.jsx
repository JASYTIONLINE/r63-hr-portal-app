// ============================================================================
// Hero.jsx
// ============================================================================
//
// PURPOSE:
// This component provides a visual hero section (banner/header) that appears
// at the top of every page, directly below the Navbar. It serves as a visual
// introduction to the page and provides consistent branding and messaging
// across the entire application.
//
// HERO SECTION PATTERN:
// Hero sections are a common web design pattern that:
// 1. Create visual hierarchy by drawing attention to the top of the page
// 2. Provide context about the page or application purpose
// 3. Establish brand identity through consistent styling
// 4. Improve user orientation by clearly marking the start of page content
//
// In this application, the Hero section appears on every page (via Layout.jsx),
// creating visual consistency and reinforcing the application's identity.
// The content is intentionally generic to work across all pages, though it
// could be made dynamic in the future to display page-specific messaging.
//
// LAYOUT INTEGRATION:
// This component is rendered in Layout.jsx, which means it appears on every
// page automatically. It sits between the Navbar and the main content area,
// creating a clear visual separation and hierarchy:
// Navbar (navigation) → Hero (branding/context) → Main Content → Footer
//
// SEMANTIC HTML:
// The component uses the <header> element, which is semantic HTML5 that
// indicates this is a header section of the page. This helps with:
// - Accessibility: Screen readers understand the page structure
// - SEO: Search engines can better understand page hierarchy
// - Code clarity: Developers immediately understand the component's purpose
//
// PHASE 2 MIGRATION:
// This component will remain unchanged in Phase 2. The hero section's
// purpose and styling will stay the same regardless of Firebase integration.
// If needed, the content could be made dynamic to pull from Firebase, but
// the component structure will remain the same.
//
// ============================================================================

import React from "react";

function Hero() {
  return (
    // ========================================================================
    // HERO SECTION STRUCTURE
    // ========================================================================
    // The <header> element provides semantic meaning and Bootstrap classes
    // handle the styling:
    //
    // Bootstrap classes:
    // - py-5: Vertical padding (top and bottom)
    //   * p = padding
    //   * y = vertical axis (top + bottom)
    //   * 5 = large spacing size on Bootstrap's 0-5 scale
    //   * Result: padding-top: 3rem + padding-bottom: 3rem
    //
    // - bg-light: Light gray background color
    //   Creates visual contrast with the white main content area below
    //
    // - border-bottom: Adds a subtle border at the bottom
    //   Creates visual separation between Hero and main content
    //
    // - mb-4: Bottom margin
    //   * m = margin
    //   * b = bottom
    //   * 4 = medium spacing size
    //   * Provides breathing room between Hero and main content
    // ========================================================================
    <header className="py-5 bg-light border-bottom mb-4">
      {/* ====================================================================
          HERO CONTENT CONTAINER
          ====================================================================
          The container class constrains the content width and centers it
          horizontally, ensuring the hero content doesn't stretch too wide
          on large screens (improves readability).
          
          text-center: Centers all text content horizontally within the
          container, creating a balanced, professional appearance.
          ==================================================================== */}
      <div className="container text-center">
        {/* ================================================================
            MAIN HEADING
            ================================================================
            The <h1> element is the primary heading of the page. It uses:
            - fw-bold: Makes the text bold for emphasis
            - Semantic importance: <h1> indicates this is the most important
              heading, which helps with SEO and accessibility
            
            This heading provides the main branding message for the
            application, visible on every page.
            ================================================================ */}
        <h1 className="fw-bold">Welcome to the HR Portal</h1>
        
        {/* ================================================================
            SUBTITLE/TAGLINE
            ================================================================
            The paragraph provides additional context about the application's
            purpose. It uses:
            - text-muted: Gray text color for visual hierarchy (less
              prominent than the heading)
            - lead: Bootstrap class that makes text slightly larger and
              more readable, perfect for taglines and introductory text
            
            This creates a clear information hierarchy: heading (most
            important) → tagline (supporting information).
            ================================================================ */}
        <p className="text-muted lead">
          A simple and efficient system to manage employees and HR operations.
        </p>
      </div>
    </header>
  );
}

export default Hero;
