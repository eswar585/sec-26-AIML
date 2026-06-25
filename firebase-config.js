import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdDXcxviRV1UxryvJsrKwq02qak9zT37k",
  authDomain: "sec26-aiml-portal.firebaseapp.com",
  projectId: "sec26-aiml-portal",
  storageBucket: "sec26-aiml-portal.firebasestorage.app",
  messagingSenderId: "175017783748",
  appId: "1:175017783748:web:8d821ae6b05f332c5b3491",
  measurementId: "G-YEKP9PXW6V"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
