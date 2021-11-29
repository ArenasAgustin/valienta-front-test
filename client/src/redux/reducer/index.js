import {
  FILTER_GENDER,
  FILTER_STATUS,
  GET_CHARACTER,
  GET_CHARACTERS,
  NO_FILTER_GENDER,
  NO_FILTER_STATUS,
  FILTER_SEARCH,
  NO_FILTER_SEARCH,
  RESET_ALL,
  GET_LOCATIONS,
  FILTER_NAME
} from "../constants";

const initialState = {
  characterArray: [],
  filteredCharacterArray: [],
  filterStatus: "all",
  filterGender: "all",
  filterSearch: "all",
  character: {},
  locationsArray: [],
  nameLocations: [],
  typeLocations: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // characters
    case GET_CHARACTERS:
      return {
        ...state,
        characterArray: payload,
        filteredCharacterArray: payload,
      };

    case GET_CHARACTER:
      return {
        ...state,
        character: payload,
      };

    case FILTER_STATUS:
      return {
        ...state,
        filterStatus: payload,
        filteredCharacterArray: state.characterArray.filter(
          (character) => character.status === payload
        ),
      };

    case NO_FILTER_STATUS:
      return {
        ...state,
        filterStatus: "all",
        filteredCharacterArray: state.characterArray,
      };

    case FILTER_GENDER:
      return {
        ...state,
        filterGender: payload,
        filteredCharacterArray: state.filteredCharacterArray.filter(
          (character) => character.gender === payload
        ),
      };

    case NO_FILTER_GENDER:
      return {
        ...state,
        filterGender: "all",
        filteredCharacterArray: state.filteredCharacterArray,
      };

    case FILTER_SEARCH:
      return {
        ...state,
        filterSearch: payload,
        filteredCharacterArray: state.filteredCharacterArray.filter(
          (character) =>
            character.name.toLowerCase().includes(payload.toLowerCase())
        ),
      };

    case NO_FILTER_SEARCH:
      return {
        ...state,
        filterSearch: "all",
        filteredCharacterArray: state.filteredCharacterArray,
      };

    case RESET_ALL:
      return {
        ...state,
        filterStatus: "all",
        filterGender: "all",
        filterSearch: "all",
        filteredCharacterArray: state.characterArray,
      };

    // locations
    case GET_LOCATIONS:
      return {
        ...state,
        locationsArray: payload.locations,
        nameLocations: payload.nameLocations,
        typeLocations: payload.typeLocations,
      };

    default:
      return state;
  }
};
