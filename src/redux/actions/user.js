import { USER_ACTION_TYPES } from "../types";
import { addPetToCurrentUser } from "../../firebase/users";
import { storePetImage } from "../../firebase/pets";

export const addPet = (petInfo, image) => async dispatch => {
    const petId = await addPetToCurrentUser(petInfo);
    const photoUrl = await storePetImage(image, petId);

    dispatch({
        type: USER_ACTION_TYPES.ADD_PET,
        payload: { ...petInfo, photoUrl },
    });
};
