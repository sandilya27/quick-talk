import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCS_l-rTmk5SMK4cWdp2SbKr7x_73xdoMM",
  authDomain: "quick-talk-d7d1c.firebaseapp.com",
  projectId: "quick-talk-d7d1c",
  storageBucket: "quick-talk-d7d1c.appspot.com",
  messagingSenderId: "1081359261156",
  appId: "1:1081359261156:web:9732b2c684222e9c427bf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);