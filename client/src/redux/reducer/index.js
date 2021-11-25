import { GET_CHARACTER, GET_CHARACTERS } from "../constants";

const initialState = {
    characterArray: [],
    character: {},
};

export const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characterArray: payload
            };
        case GET_CHARACTER:
            return {
                ...state,
                character: payload
            };
        default:
            return state;
    }
};

