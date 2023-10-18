// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKci2WSjihDjs1EIrZ5LN7mjbWyyfa7us",
  authDomain: "auto-repair-bd.firebaseapp.com",
  projectId: "auto-repair-bd",
  storageBucket: "auto-repair-bd.appspot.com",
  messagingSenderId: "815999352139",
  appId: "1:815999352139:web:f42182b78c57403550fcce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;