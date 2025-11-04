// App.jsx
// ----------------------------------------------------
// This is your root React component.
// It returns a simple <h1>Hello World</h1> element,
// which will be rendered inside the root <div> in index.html.
// ----------------------------------------------------

import React from "react";

// Functional component syntax — modern React best practice
function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// Export it so index.js can import and render it
export default App;
