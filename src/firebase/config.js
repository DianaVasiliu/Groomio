import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { firebaseConfig } from "../secrets";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
