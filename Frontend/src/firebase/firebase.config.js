// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUeQJ6wZ4CWNnoUMTahifMqFXpoSX05-Y",
  authDomain: "libralink-5e1a3.firebaseapp.com",
  projectId: "libralink-5e1a3",
  storageBucket: "libralink-5e1a3.appspot.com",
  messagingSenderId: "170178949988",
  appId: "1:170178949988:web:8e1974a4e3cf8ac1e88071",
  measurementId: "G-8MB9LLMYM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;