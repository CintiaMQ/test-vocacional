// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxzAH2LtazcdvcCVklc4dzgogp5lyZB_8",
  authDomain: "tecvoc-61acc.firebaseapp.com",
  projectId: "tecvoc-61acc",
  storageBucket: "tecvoc-61acc.appspot.com",
  messagingSenderId: "820035009397",
  appId: "1:820035009397:web:fc0eac65324b5f0525f13c",
  measurementId: "G-6C4VDFFS8F"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
