// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFcKWornCHbqEcMDlDeiQnOWGrtx4C-2s",
    authDomain: "superior-ssc.firebaseapp.com",
    projectId: "superior-ssc",
    storageBucket: "superior-ssc.firebasestorage.app",
    messagingSenderId: "976036226072",
    appId: "1:976036226072:web:456e4811e426a1d5f50f6d",
    measurementId: "G-873L81SG8J"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
