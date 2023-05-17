import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "./config";
import { COLLECTIONS } from "./utils/constants";

const addUser = async (id, data) => {
    const userRef = doc(db, COLLECTIONS.USERS, id);
    await setDoc(userRef, data);
};

const getUserById = async id => {
    const userRef = doc(db, COLLECTIONS.USERS, id);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    return userData;
};

export { addUser, getUserById };
