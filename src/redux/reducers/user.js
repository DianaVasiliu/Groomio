import { USER_ACTION_TYPES } from "../types";

const initialState = {
    username: "",
    appointments: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.UPDATE_USERNAME:
            return { ...state, username: action.payload };
        default:
            return state;
    }
};
