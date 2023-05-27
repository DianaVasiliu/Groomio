import { doc, updateDoc } from "firebase/firestore/lite";
import { auth, db, storage } from "./config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { COLLECTIONS } from "./utils/constants";

const storePetImage = async (image, petId) => {
    try {
        const uid = auth.currentUser.uid;
        const fileName = `images/${uid}-pet-${petId}.jpg`;
        const imageRef = ref(storage, fileName);

        const response = await fetch(image.uri);
        const blob = await response.blob();
        await uploadBytes(imageRef, blob);

        const imageStorageRef = ref(storage, fileName);
        const url = await getDownloadURL(imageStorageRef);
        console.log("Image uploaded successfully");

        await updatePet(petId, { photoUrl: url });

        return url;
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
};

const updatePet = async (id, newInfo) => {
    try {
        const userId = auth.currentUser.uid;

        const userDocRef = doc(db, COLLECTIONS.USERS, userId);
        const petDocRef = doc(userDocRef, COLLECTIONS.PETS, id);

        await updateDoc(petDocRef, newInfo);
    } catch (e) {
        console.error(e);
    }
};

export { storePetImage, updatePet };
