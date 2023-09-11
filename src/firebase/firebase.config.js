// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo6B1Fs1YzhkhYWQ8HHaWCxWKSiwhyeHA",
  authDomain: "hotel-auth-practice.firebaseapp.com",
  projectId: "hotel-auth-practice",
  storageBucket: "hotel-auth-practice.appspot.com",
  messagingSenderId: "925611647005",
  appId: "1:925611647005:web:ce342df7ede4a95e19e6f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;