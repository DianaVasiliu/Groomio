import { AUTH_ACTION_TYPES } from "../types";
import {
    loginWithEmailAndPassword,
    logOut,
    signupWithEmailAndPassword,
} from "../../firebase/auth";

export const signup = (email, password, otherFields) => async dispatch => {
    const user = await signupWithEmailAndPassword(email, password, otherFields);

    dispatch({
        type: AUTH_ACTION_TYPES.SIGN_UP,
        payload: user,
    });
};

export const login = (email, password) => async dispatch => {
    const user = await loginWithEmailAndPassword(email, password);

    dispatch({
        type: AUTH_ACTION_TYPES.LOGIN,
        payload: user,
    });
};

export const logout = () => async dispatch => {
    logOut();

    dispatch({
        type: AUTH_ACTION_TYPES.LOGOUT,
    });
};
