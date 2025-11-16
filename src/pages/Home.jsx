// ----------------------------------------------------
// Home.jsx
// Landing page with a single CTA card.
// Uses Section, Card, Button. Fully themed.
// ----------------------------------------------------

import React from "react";
import { useNavigate } from "react-router-dom";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <Section className="section-graphite">

      <div className="d-flex justify-content-center">
        <Card
          title="Welcome to the HR Portal"
          className="section-panel"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <p className="mb-4">
            Manage employee information, submit leave requests, and access your
            personal dashboard quickly and securely.
          </p>

          <Button
            className="w-100"
            variant="primary"
            onClick={() => {
              console.log("Home: Enter Portal clicked");
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
