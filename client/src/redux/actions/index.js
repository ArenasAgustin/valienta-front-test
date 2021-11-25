import axios from "axios";
import { GET_CHARACTER, GET_CHARACTERS, API_HOST } from "../constants";

export const getAll = () => {
  return async (dispatch) => {
    try {
      const characterArray = await axios.get(API_HOST);

      return dispatch({
        type: GET_CHARACTERS,
        payload: characterArray.data,
      });
    } catch (error) {
      console.log(error, "getAll ||Error||");
    }
  };
};
