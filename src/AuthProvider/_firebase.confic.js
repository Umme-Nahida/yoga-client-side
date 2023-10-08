import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEJBViJQRKauRuYbtVcm5kqLUBHAOTlTA",
  authDomain: "assignment-nine-28037.firebaseapp.com",
  projectId: "assignment-nine-28037",
  storageBucket: "assignment-nine-28037.appspot.com",
  messagingSenderId: "396343972819",
  appId: "1:396343972819:web:62557bdc776783da531526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;