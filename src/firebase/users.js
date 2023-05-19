import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from "firebase/firestore/lite";
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

    const petsCollection = collection(userRef, COLLECTIONS.PETS);
    const petsSnap = await getDocs(petsCollection);
    const pets = [];
    petsSnap.forEach(pet => pets.push(pet.data()));
    return {
        ...userData,
        pets,
    };
};

export { addUser, getUserById };
