import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./user";
import { AUTH_ACTION_TYPES } from "../types";

const appReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

const rootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    if (action.type === AUTH_ACTION_TYPES.LOGOUT) {
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer;
