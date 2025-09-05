// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvebOd44rqBVvDsj12rNAJ_vCfy0uyydA",
  authDomain: "vgtk-parser.firebaseapp.com",
  projectId: "vgtk-parser",
  storageBucket: "vgtk-parser.firebasestorage.app",
  messagingSenderId: "369828135879",
  appId: "1:369828135879:web:ad18e0c1b525f3cbef0fe2",
  measurementId: "G-CETL1LFGEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth();
export const dbUsersReference = ref(db, "users");
export const dbHoursReference = ref(db, "hours");
