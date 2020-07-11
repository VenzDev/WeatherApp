import types from "./types";

const getCityPending = () => ({
  type: types.GET_CITY_PENDING,
  payload: true,
});
const getCitySuccess = (city: Object) => ({
  type: types.GET_CITY_SUCCESS,
  payload: city,
});
const getCityFailed = (errorMessage: String) => ({
  type: types.GET_CITY_FAILED,
  payload: errorMessage,
});
const clearData = () => ({
  type: types.CLEAR_DATA,
  payload: true,
});
const selectCity = (city: Object) => ({
  type: types.SELECT_CITY,
  payload: city,
});

export default {
  getCityPending,
  getCitySuccess,
  getCityFailed,
  selectCity,
  clearData,
};
