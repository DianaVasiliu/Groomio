import { AUTH_ACTION_TYPES, USER_ACTION_TYPES } from "../types";
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
    const pets = user.pets;
    delete user.pets;

    dispatch({
        type: AUTH_ACTION_TYPES.LOGIN,
        payload: user,
    });

    dispatch({
        type: USER_ACTION_TYPES.POPULATE_PETS,
        payload: pets,
    });
};

export const logout = () => async dispatch => {
    logOut();

    dispatch({
        type: AUTH_ACTION_TYPES.LOGOUT,
    });
};
