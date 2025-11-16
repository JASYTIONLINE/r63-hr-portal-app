// ============================================================================
// Home.jsx
// ============================================================================
//
// PURPOSE:
// This component serves as the public landing page for the HR Portal application.
// It provides a welcoming entry point for users before they authenticate,
// introducing the application's purpose and directing them to the login page.
//
// LANDING PAGE PATTERN:
// Landing pages are a common web design pattern where the first page users see
// provides:
// 1. A clear value proposition (what the application does)
// 2. A call-to-action (CTA) that guides users to the next step
// 3. A professional, welcoming appearance that builds trust
//
// In this application, the Home page serves as a bridge between unauthenticated
// users and the protected dashboard areas. It's accessible to everyone,
// regardless of authentication status (see router.jsx - no ProtectedRoute).
//
// COMPONENT COMPOSITION:
// This page demonstrates component composition - building complex UIs from
// simpler, reusable components:
// - Section: Provides consistent page structure and theming
// - Card: Displays content in a styled container
// - Button: Interactive element for navigation
//
// This pattern follows the Single Responsibility Principle - each component
// has one job, making the code more maintainable and reusable.
//
// NAVIGATION:
// Uses React Router's useNavigate hook for programmatic navigation. When the
// user clicks the Login button, it navigates to /login without a full page
// reload (client-side navigation). This is faster and provides a smoother
// user experience than traditional server-side navigation.
//
// PHASE 2 MIGRATION:
// This component will remain largely unchanged in Phase 2. The navigation
// pattern and component structure will stay the same. Only the content or
// styling might be enhanced.
//
// ============================================================================

import React from "react";
import { useNavigate } from "react-router-dom";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

function Home() {
  // ========================================================================
  // NAVIGATION HOOK
  // ========================================================================
  // useNavigate is a React Router hook that returns a function to programmatically
  // navigate to different routes. Unlike <Link> components (which are for user
  // clicks), navigate() is used when navigation needs to happen in response to
  // JavaScript logic (like button clicks, form submissions, or conditional logic).
  //
  // The navigate function updates the URL and triggers React Router to render
  // the appropriate component, all without a full page reload.
  // ========================================================================
  const navigate = useNavigate();

  return (
    // ====================================================================
    // PAGE STRUCTURE
    // ====================================================================
    // Section component provides consistent page layout and theming.
    // The "section-graphite" class applies the application's color scheme.
    // ====================================================================
    <Section className="section-graphite">

      {/* ================================================================
          CENTERED CONTENT CARD
          ================================================================
          Bootstrap's flexbox utilities (d-flex, justify-content-center)
          center the card horizontally on the page. This creates a focused,
          professional appearance for the landing page.
          ================================================================ */}
      <div className="d-flex justify-content-center">
        <Card
          title="Welcome to the HR Portal"
          className="section-panel"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          {/* ============================================================
              VALUE PROPOSITION
              ============================================================
              This paragraph explains what the application does, helping
              users understand its purpose before they log in. Clear,
              concise messaging is important for user onboarding.
              ============================================================ */}
          <p className="mb-4">
            Manage employee information, submit leave requests, and access your
            personal dashboard quickly and securely.
          </p>

          {/* ============================================================
              CALL-TO-ACTION BUTTON
              ============================================================
              The Login button is the primary CTA (Call-To-Action) that
              guides users to the next step in their journey. When clicked,
              it navigates to the /login route using the navigate function.
              
              className="w-100" makes the button full-width within the card,
              creating a prominent, easy-to-click target.
              ============================================================ */}
          <Button
            className="w-100"
            variant="primary"
            onClick={() => {
              console.log("Home: Enter Portal clicked");
              // Navigate to login page when button is clicked
              // This uses client-side navigation (no page reload)
              navigate("/login");
            }}
          >
            Login
          </Button>
        </Card>
      </div>

    </Section>
  );
}

export default Home;
