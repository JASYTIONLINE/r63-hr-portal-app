// ----------------------------------------------------
// Layout.jsx
// Global page frame for the application.
// Includes Navbar, Hero, dynamic page content, Footer.
// Every page rendered by the router appears inside <Outlet/>.
// ----------------------------------------------------

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <>
            {/* Global Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* my-4 is a Bootstrap spacing utility class. It gives the page content a little breathing room between
            the hero section and the footer. 
            m = margin; y = the vertical axis (top + bottom); 4 = the spacing size (Bootstrap scale 0–5);
            my-4 = margin-top: 1.5rem + margin-bottom: 1.5rem  */}
            <main className="container my-4">
                <Outlet />
            </main>

            {/* Global Footer */}
            <Footer />
        </>
    );
}

export default Layout;
