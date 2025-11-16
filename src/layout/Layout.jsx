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
// COMPONENT STRUCTURE:
// The layout follows a standard web page structure:
// - Header (Navbar): Global navigation, always visible
// - Hero: Visual banner/header section
// - Main Content (<Outlet />): Dynamic page content
// - Footer: Site information, always visible
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
        // REACT FRAGMENT
        // ====================================================================
        // React requires a single parent element. The empty fragment (<>)
        // allows us to return multiple sibling elements without adding an
        // extra DOM node. This keeps the HTML structure clean.
        // ====================================================================
        <>
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
                  * m = margin
                  * y = vertical axis (top + bottom)
                  * 4 = spacing size on Bootstrap's 0-5 scale
                  * Result: margin-top: 1.5rem + margin-bottom: 1.5rem
                
                This spacing provides visual breathing room between the Hero
                section and the Footer, making the page more readable.
                ================================================================ */}
            <main className="container my-4">
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
                ================================================================ */}
            <Footer />
        </>
    );
}

export default Layout;
