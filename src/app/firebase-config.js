import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcyXTOBGFNa5X2eM2mFnt9GrrjtK8h9rs",
  authDomain: "obavijesti-b3310.firebaseapp.com",
  projectId: "obavijesti-b3310",
  storageBucket: "obavijesti-b3310.appspot.com",
  messagingSenderId: "589803328159",
  appId: "1:589803328159:web:a75ddb72fbb04ffbe888aa",
  measurementId: "G-8Y7M452VYE"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);