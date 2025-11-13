// ----------------------------------------------------
// Home.jsx
// Landing page with a single CTA card.
// Uses Section, Card, Button. Fully themed.
// ----------------------------------------------------

import React from "react";

import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

function Home() {
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

          <Button className="w-100" variant="primary">
            Enter Portal
          </Button>
        </Card>
      </div>

    </Section>
  );
}

export default Home;
