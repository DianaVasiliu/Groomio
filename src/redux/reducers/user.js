import { USER_ACTION_TYPES } from "../types";

const initialState = {
    pets: [],
    appointments: [],
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.ADD_PET:
            const newPetsAfterAdd = [...state.pets, action.payload].sort(
                (a, b) => (a.name > b.name ? 1 : -1),
            );
            return {
                ...state,
                pets: newPetsAfterAdd,
            };
        case USER_ACTION_TYPES.POPULATE_PETS:
            const populatedPets = action.payload.sort((a, b) =>
                a.name > b.name ? 1 : -1,
            );
            return {
                ...state,
                pets: populatedPets,
            };
        default:
            return state;
    }
};
