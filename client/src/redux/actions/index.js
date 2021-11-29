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
} from "../constants";

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
    payload: name
  };
}

export const resetFilterSearch = () => {
  return {
    type: NO_FILTER_SEARCH,
  }
}

export const restAll = () => {
  return {
    type: RESET_ALL         
  };
};