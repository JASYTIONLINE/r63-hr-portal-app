// ============================================================================
// Layout.jsx
// ============================================================================
//
// PURPOSE:
// This component provides the global page structure (layout) that wraps all
// pages in the application. It ensures consistent UI elements (Navbar, Hero,
// Footer) appear on every page, while allowing individual page content to
// render dynamically based on the current route.
//
// LAYOUT PATTERN:
// The Layout pattern is a common React Router technique where a parent route
// component wraps child routes. This eliminates code duplication - instead of
// including Navbar, Hero, and Footer in every page component, we define them
// once in Layout and they automatically appear on all pages.
//
// HOW IT WORKS WITH REACT ROUTER:
// 1. In router.jsx, Layout is the parent route (path: "/")
// 2. All other routes (home, login, employee, hr) are children of Layout
// 3. When a child route matches, React Router renders Layout first
// 4. Layout renders <Outlet />, which is where the child route's component
//    appears
// 5. This creates the structure: Navbar → Hero → [Page Content] → Footer
//
// THE <OUTLET /> COMPONENT:
// <Outlet /> is a special React Router component that acts as a placeholder
// for child route components. When you navigate to /employee, React Router:
// 1. Renders Layout (this component)
// 2. Replaces <Outlet /> with EmployeeDashboard
// 3. Result: Navbar, Hero, EmployeeDashboard, Footer all render together
//
// This pattern is more efficient than conditionally rendering components in
// each page, and it ensures the layout is always consistent.
//
// STICKY FOOTER PATTERN:
// The layout uses flexbox to ensure the footer always sticks to the bottom
// of the viewport, even when page content is short. The wrapper div uses:
// - d-flex flex-column: Creates a vertical flexbox container
// - min-vh-100: Ensures the container is at least 100% of viewport height
// The main content area uses flex-grow-1 to expand and fill available space,
// pushing the footer to the bottom.
//
// COMPONENT STRUCTURE:
// The layout follows a standard web page structure:
// - Header (Navbar): Global navigation, always visible
// - Hero: Visual banner/header section
// - Main Content (<Outlet />): Dynamic page content (grows to fill space)
// - Footer: Site information, always at bottom
//
// PHASE 2 MIGRATION:
// This component will remain unchanged in Phase 2. The layout structure
// and Outlet pattern will work the same way with Firebase authentication.
//
// ============================================================================

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        // ====================================================================
        // FLEXBOX CONTAINER FOR STICKY FOOTER
        // ====================================================================
        // This wrapper div uses Bootstrap flexbox utilities to create a
        // sticky footer layout:
        // - d-flex: Makes this a flexbox container
        // - flex-column: Stacks children vertically (Navbar → Hero → Main → Footer)
        // - min-vh-100: Ensures container is at least 100% of viewport height
        //
        // This ensures the footer always appears at the bottom of the viewport,
        // even when page content is short. When content is long, the footer
        // appears after the content (normal flow).
        // ====================================================================
        <div className="d-flex flex-column min-vh-100">
            {/* ================================================================
                GLOBAL NAVIGATION
                ================================================================
                The Navbar appears on every page, providing consistent
                navigation throughout the application. It includes links to
                all major sections and adapts based on authentication state
                (shows Login/Logout accordingly).
                ================================================================ */}
            <Navbar />

            {/* ================================================================
                HERO SECTION
                ================================================================
                The Hero component provides a visual banner/header that appears
                on every page. This creates visual consistency and can display
                page-specific or global messaging.
                ================================================================ */}
            <Hero />

            {/* ================================================================
                MAIN CONTENT AREA
                ================================================================
                The <main> element is the semantic HTML5 tag for the primary
                content of the page. It helps with accessibility and SEO.
                
                Bootstrap classes:
                - container: Constrains content width and centers it
                - my-4: Adds vertical margin (top and bottom)
                - flex-grow-1: Makes this element grow to fill available space
                  This pushes the footer to the bottom when content is short.
                
                The flex-grow-1 class is key to the sticky footer pattern - it
                makes the main content area expand to fill the space between
                the Hero and Footer, ensuring the Footer always sits at the
                bottom of the viewport.
                ================================================================ */}
            <main className="container my-4 flex-grow-1">
                {/* ============================================================
                    OUTLET - DYNAMIC PAGE CONTENT
                    ============================================================
                    <Outlet /> is a React Router component that renders the
                    matched child route component. When you navigate to:
                    - /home → Home component renders here
                    - /login → Login component renders here
                    - /employee → EmployeeDashboard renders here
                    - /hr → HRDashboard renders here
                    
                    This is the magic of nested routing - Layout provides the
                    structure, and Outlet fills in the page-specific content.
                    ============================================================ */}
                <Outlet />
            </main>

            {/* ================================================================
                GLOBAL FOOTER
                ================================================================
                The Footer appears on every page, typically containing
                copyright information, links, or other site-wide content.
                This provides consistency and a professional appearance.
                
                With the flexbox layout, the footer will always appear at the
                bottom of the viewport when content is short, and after the
                content when content is long.
                ================================================================ */}
            <Footer />
        </div>
    );
}

export default Layout;