import { USER_ACTION_TYPES } from "../types";
import { addPetToCurrentUser } from "../../firebase/users";

export const addPet = petInfo => async dispatch => {
    await addPetToCurrentUser(petInfo);

    dispatch({
        type: USER_ACTION_TYPES.ADD_PET,
        payload: petInfo,
    });
};
