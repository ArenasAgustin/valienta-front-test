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
  FILTER_NAME_LOCATION,
  NO_FILTER_NAME_LOCATION,
  FILTER_TYPE_LOCATION,
  NO_FILTER_TYPE_LOCATION,
  RESET_LOCATION,
  GET_EPISODES,
  NO_FILTER_CODE_EPISODE,
  FILTER_CODE_EPISODE,
  NO_FILTER_NAME_EPISODE,
  FILTER_NAME_EPISODE,
  RESET_EPISODE,
} from "../constants";

const initialState = {
  characterArray: [],
  filteredCharacterArray: [],
  filterStatus: "all",
  filterGender: "all",
  filterSearch: "all",
  character: {},

  locationsArray: [],
  filteredLocationsArray: [],
  nameLocations: [],
  typeLocations: [],

  episodesArray: [],
  filteredEpisodesArray: [],
  codeEpisodes: [],
  nameEpisodes: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // -------------------------------------------------------------------------------------- characters
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

    // -------------------------------------------------------------------------------------- locations
    case GET_LOCATIONS:
      return {
        ...state,
        locationsArray: payload.locations,
        filteredLocationsArray: payload.locations,
        nameLocations: payload.nameLocations,
        typeLocations: payload.typeLocations,
      };

    case FILTER_NAME_LOCATION:
      return {
        ...state,
        filteredLocationsArray: payload,
      };

    case NO_FILTER_NAME_LOCATION:
      return {
        ...state,
        filteredLocationsArray: state.locationsArray,
      };

    case FILTER_TYPE_LOCATION:
      return {
        ...state,
        filteredLocationsArray: state.filteredLocationsArray.filter(
          (location) => location.type === payload
        ),
      };

    case NO_FILTER_TYPE_LOCATION:
      return {
        ...state,
        filteredLocationsArray: state.filteredLocationsArray,
      };

    case RESET_LOCATION:
      return {
        ...state,
        filteredLocationsArray: state.locationsArray,
      };

    // -------------------------------------------------------------------------------------- episodes
    case GET_EPISODES:
      return {
        ...state,
        episodesArray: payload.episodes,
        filteredEpisodesArray: payload.episodes,
        codeEpisodes: payload.codeEpisodes,
        nameEpisodes: payload.nameEpisodes,
      };

    case FILTER_CODE_EPISODE:
      return {
        ...state,
        filteredEpisodesArray: state.filteredEpisodesArray.filter(
          (episode) => episode.episode === payload
        ),
      };

    case NO_FILTER_CODE_EPISODE:
      return {
        ...state,
        filteredEpisodesArray: state.filteredEpisodesArray,
      };

    case FILTER_NAME_EPISODE:
      return {
        ...state,
        filteredEpisodesArray: payload,
      };

    case NO_FILTER_NAME_EPISODE:
      return {
        ...state,
        filteredEpisodesArray: state.episodesArray,
      };

    case RESET_EPISODE:
      return {
        ...state,
        filteredEpisodesArray: state.episodesArray,
      };

    default:
      return state;
  }
};
