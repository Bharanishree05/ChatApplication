// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvhda70iRgRZwieSCVP1bkaSn2p2IWFGc",
  authDomain: "chat-29e83.firebaseapp.com",
  projectId: "chat-29e83",
  storageBucket: "chat-29e83.firebasestorage.app",
  messagingSenderId: "583428721405",
  appId: "1:583428721405:web:59bafe6eb2a134e7a4cc94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()