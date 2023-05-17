import { AUTH_ACTION_TYPES } from "../types";

const initialState = {
    currentUser: null,
    isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTION_TYPES.SIGN_UP:
        case AUTH_ACTION_TYPES.LOGIN:
            return {
                currentUser: action.payload,
                isLoggedIn: true,
            };
        case AUTH_ACTION_TYPES.LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
};
