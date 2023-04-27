import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "./config";

const addUser = async username => {
    const usersCol = collection(db, "users");
    const docRef = await addDoc(usersCol, { username });
    console.log("new user added", docRef);
};

export { addUser };
