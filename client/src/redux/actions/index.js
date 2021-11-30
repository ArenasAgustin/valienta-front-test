import axios from "axios";
import {
  GET_CHARACTER,
  GET_CHARACTERS,
  API_HOST,
  FILTER_STATUS,
  NO_FILTER_STATUS,
  FILTER_GENDER,
  NO_FILTER_GENDER,
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
  RESET_EPISODE
} from "../constants";

// characters
export const getAll = () => {
  return async (dispatch) => {
    try {
      const characterArray = await axios.get(`${API_HOST}/characters`);

      return dispatch({
        type: GET_CHARACTERS,
        payload: characterArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  };
};

export const filterByStatus = (status) => {
  return {
    type: FILTER_STATUS,
    payload: status,
  };
};

export const resetFilterStatus = () => {
  return {
    type: NO_FILTER_STATUS,
  };
};

export const filterByGender = (gender) => {
  return {
    type: FILTER_GENDER,
    payload: gender,
  };
};

export const resetFilterGender = () => {
  return {
    type: NO_FILTER_GENDER,
  };
};

export const filterBySearch = (name) => {
  return {
    type: FILTER_SEARCH,
    payload: name,
  };
};

export const resetFilterSearch = () => {
  return {
    type: NO_FILTER_SEARCH,
  };
};

export const restAll = () => {
  return {
    type: RESET_ALL,
  };
};

// ------------------------------------------------------------------------- locations
export const getAllLocations = () => {
  return async (dispatch) => {
    try {
      const locationArray = await axios.get(`${API_HOST}/locations`);

      return dispatch({
        type: GET_LOCATIONS,
        payload: locationArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  };
};

export const filterByNameLocation = (name) => {
  return async (dispatch) => {
    try {
      const locationArray = await axios.get(`${API_HOST}/locations/${name}`);

      return dispatch({
        type: FILTER_NAME_LOCATION,
        payload: locationArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  };
};

export const resetFilterNameLocation = () => {
  return {
    type: NO_FILTER_NAME_LOCATION,
  };
};

export const filterByTypeLocation = (type) => {
  return {
    type: FILTER_TYPE_LOCATION,
    payload: type,
  };
};

export const resetFilterTypeLocation = () => {
  return {
    type: NO_FILTER_TYPE_LOCATION,
  };
};

export const resetLocation = () => {
  return {
    type: RESET_LOCATION,
  };
};

// ------------------------------------------------------------------------- episodes
export const getAllEpisodes = () => {
  return async (dispatch) => {
    try {
      const episodeArray = await axios.get(`${API_HOST}/episodes`);

      return dispatch({
        type: GET_EPISODES,
        payload: episodeArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  };
}

export const filterByCodeEpisode = (code) => {
  return {
    type: FILTER_CODE_EPISODE,
    payload: code,
  };
}

export const resetFilterCodeEpisode = () => {
  return {
    type: NO_FILTER_CODE_EPISODE,
  };
}

export const filterByNameEpisode = (name) => {
  return async (dispatch) => {
    try {
      const episodeArray = await axios.get(`${API_HOST}/episodes/${name}`);

      return dispatch({
        type: FILTER_NAME_EPISODE,
        payload: episodeArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  }
}

export const resetFilterNameEpisode = () => {
  return {
    type: NO_FILTER_NAME_EPISODE,
  };
}

export const resetEpisode = () => {
  return {
    type: RESET_EPISODE,
  };
}
