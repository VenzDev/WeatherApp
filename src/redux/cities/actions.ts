import {
  GET_CITY_FAILED,
  GET_CITY_SUCCESS,
  GET_CITY_PENDING,
  CLEAR_DATA,
  SELECT_CITY,
  CitiesActionTypes,
} from "./types";
import { City } from "./citiesState";

const getCityPending = (): CitiesActionTypes => ({
  type: GET_CITY_PENDING,
  isLoading: true,
});
const getCitySuccess = (city: City): CitiesActionTypes => ({
  type: GET_CITY_SUCCESS,
  city,
});
const getCityFailed = (errorMessage: string): CitiesActionTypes => ({
  type: GET_CITY_FAILED,
  errorMessage,
});
const clearData = (): CitiesActionTypes => ({
  type: CLEAR_DATA,
  isLoading: true,
});
const selectCity = (city: City): CitiesActionTypes => ({
  type: SELECT_CITY,
  city,
});

export default {
  getCityPending,
  getCitySuccess,
  getCityFailed,
  selectCity,
  clearData,
};
