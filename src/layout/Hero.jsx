// ----------------------------------------------------
// Hero.jsx
// Reusable page hero section.
// Appears at the top of every page under the navbar.
// Easy to reskin by changing background, text, or spacing.
// ----------------------------------------------------

import React from "react";

function Hero() {
  return (
    <header className="py-5 bg-light border-bottom mb-4">
      <div className="container text-center">
        <h1 className="fw-bold">Welcome to the HR Portal</h1>
        <p className="text-muted lead">
          A simple and efficient system to manage employees and HR operations.
        </p>
      </div>
    </header>
  );
}

export default Hero;
