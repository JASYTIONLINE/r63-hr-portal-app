// ============================================================================
// Footer.jsx
// ============================================================================
//
// PURPOSE:
// This component provides the global footer that appears at the bottom of
// every page. It displays copyright information and attribution, creating
// a professional appearance and completing the standard web page structure
// (Header → Content → Footer).
//
// FOOTER PATTERN:
// Footers are a standard web design element that provide:
// 1. Visual closure to the page layout
// 2. Space for copyright and legal information
// 3. Consistent branding across all pages
// 4. Professional appearance that signals a complete application
//
// This footer is intentionally minimal, containing only essential information
// (copyright and attribution). This keeps the focus on the main content while
// still meeting the project requirement for a persistent layout footer.
//
// LAYOUT INTEGRATION:
// This component is rendered in Layout.jsx, which means it appears on every
// page automatically. No individual page components need to include it.
//
// PHASE 2 MIGRATION:
// This component will remain unchanged in Phase 2. The footer content and
// styling will stay the same regardless of Firebase integration.
//
// ============================================================================

import React from "react";

function Footer() {
  return (
    // ========================================================================
    // FOOTER STRUCTURE
    // ========================================================================
    // The footer uses Bootstrap classes for styling:
    // - bg-dark: Dark background color (matches Navbar)
    // - text-light: Light text color for contrast
    // - py-3: Vertical padding (top and bottom)
    // - mt-5: Top margin to separate from main content
    // - text-center: Centers the text horizontally
    //
    // The <footer> element is semantic HTML5 that indicates this is the
    // footer section of the page, which helps with accessibility and SEO.
    // ========================================================================
    <footer className="bg-dark text-light py-3 mt-5 text-center">
      <div className="container">
        <p className="mb-0">
          Created by JASYTI &copy; November 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;