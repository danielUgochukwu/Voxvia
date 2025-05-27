// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3Di7T3fu1E4fhIrE6h7Qj9MYFDmH1wrk",
  authDomain: "voxvia-8546.firebaseapp.com",
  projectId: "voxvia-8546",
  storageBucket: "voxvia-8546.firebasestorage.app",
  messagingSenderId: "332028257866",
  appId: "1:332028257866:web:518672ea84c6edccb8a8b3",
  measurementId: "G-Z6Q756DPW7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
