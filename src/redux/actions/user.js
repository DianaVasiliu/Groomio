import { USER_ACTION_TYPES } from "../types";

export const updateUsername = username => async dispatch => {
    dispatch({
        type: USER_ACTION_TYPES.UPDATE_USERNAME,
        payload: username,
    });
};
