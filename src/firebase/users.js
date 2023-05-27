import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
} from "firebase/firestore/lite";
import { auth, db } from "./config";
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

const addPetToCurrentUser = async petInfo => {
    const id = auth.currentUser.uid;
    const userRef = doc(db, COLLECTIONS.USERS, id);
    const petsCollection = collection(userRef, COLLECTIONS.PETS);
    const addedDoc = await addDoc(petsCollection, petInfo);
    return addedDoc.id;
};

export { addUser, getUserById, addPetToCurrentUser };
