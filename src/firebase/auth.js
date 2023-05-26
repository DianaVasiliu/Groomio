import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "./config";
import { addUser, getUserById } from "./users";

const signupWithEmailAndPassword = async (email, password, otherFields) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        const { uid, email: userEmail, photoURL } = userCredential.user;
        const dbUser = { email: userEmail, photoURL, ...otherFields };
        await addUser(uid, dbUser);
        return dbUser;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const loginWithEmailAndPassword = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );
    const { uid } = userCredential.user;
    const dbUser = await getUserById(uid);
    return dbUser;
};

const logOut = () => {
    signOut(auth)
        .then(() => {
            console.log("Sign out successful");
        })
        .catch(error => {
            console.error("Cannot sign out:", error);
        });
};

export { signupWithEmailAndPassword, loginWithEmailAndPassword, logOut };
