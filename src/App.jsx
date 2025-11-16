// ----------------------------------------------------
// Component: App.jsx
// Description:
// Root application component. Hosts the global layout
// and the router. No page logic, no login logic, no UI.
// ----------------------------------------------------

import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

// ----------------------------------------------------
// Functional Component Definition
// ----------------------------------------------------
function App() {
  return (
    <RouterProvider router={router} />
  );
}

// ----------------------------------------------------
// Export Component
// ----------------------------------------------------
export default App;
