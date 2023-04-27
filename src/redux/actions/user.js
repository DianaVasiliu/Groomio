import { USER_ACTION_TYPES } from "../types";
import { addUser } from "../../firebase/users";

export const updateUsername = username => async dispatch => {
    await addUser(username);

    dispatch({
        type: USER_ACTION_TYPES.UPDATE_USERNAME,
        payload: username,
    });
};
