import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvnTCHNPp8Pj4GI6nylyArfk05CmKx09c",
  authDomain: "thriftedcanada-7b0d5.firebaseapp.com",
  databaseURL: "https://thriftedcanada-7b0d5-default-rtdb.firebaseio.com",
  projectId: "thriftedcanada-7b0d5",
  storageBucket: "thriftedcanada-7b0d5.firebasestorage.app",
  messagingSenderId: "842686660561",
  appId: "1:842686660561:web:099fbc22b02e5328aeaaf0",
  measurementId: "G-0GR6YQ47C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue };