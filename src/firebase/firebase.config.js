// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdRk0Ju3-S9kdbDs8-TQXAotJvT9i4yMU",
  authDomain: "user-email-password-auth-9040c.firebaseapp.com",
  projectId: "user-email-password-auth-9040c",
  storageBucket: "user-email-password-auth-9040c.appspot.com",
  messagingSenderId: "487815592719",
  appId: "1:487815592719:web:06f7b2acab50fbf8955c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;