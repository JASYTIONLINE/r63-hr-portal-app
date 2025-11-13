// src/firebase.js
// Initializes Firebase and connects to the Realtime Database

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";  // Step 1: bring in database tools

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8rwrRUpOVZx5idjdfPRhp0InFnXu5cnw",
  authDomain: "fs-hr-portal-db.firebaseapp.com",
  databaseURL: "https://fs-hr-portal-db-default-rtdb.firebaseio.com",
  projectId: "fs-hr-portal-db",
  storageBucket: "fs-hr-portal-db.firebasestorage.app",
  messagingSenderId: "948918570507",
  appId: "1:948918570507:web:0cb5f69e9ece2f53c4c10e"
};

// Step 2: initialize Firebase using your project credentials
const app = initializeApp(firebaseConfig);

// Step 3: create a database connection handle
const db = getDatabase(app);

// Step 4: export db so the rest of the app can use it
export { db };
