import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6Rqqx9AjpGjpieCl7lA4cTt_bjz1xK1E",
  authDomain: "obavijesti-b3310.firebaseapp.com",
  projectId: "obavijesti-b3310",
  storageBucket: "obavijesti-b3310.appspot.com",
  messagingSenderId: "589803328159",
  appId: "1:589803328159:web:a75ddb72fbb04ffbe888aa",
  measurementId: "G-8Y7M452VYE",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
