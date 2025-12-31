// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9pH9UhxdhPR1pXnGxVywFAPr6YDxWoKM",
  authDomain: "my-new-company-8c767.firebaseapp.com",
  projectId: "my-new-company-8c767",
  storageBucket: "my-new-company-8c767.firebasestorage.app",
  messagingSenderId: "1030156116118",
  appId: "1:1030156116118:web:bd8198ca64eec07576e2b7",
  measurementId: "G-9LFQ8ZSME2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;