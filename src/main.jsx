import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";  // make sure path matches
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { get, ref } from "firebase/database";
import { db } from "./firebase";

get(ref(db, "users")).then(snapshot => {
  console.log(snapshot.val());
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
