import { City } from "./citiesState";

const GET_CITY_PENDING = "GET_CITY_PENDING";
const GET_CITY_SUCCESS = "GET_CITY_SUCCESS";
const GET_CITY_FAILED = "GET_CITY_FAILED";
const SELECT_CITY = "SELECT_CITY";
const CLEAR_DATA = "CLEAR_DATA";

export interface GetCityPendingAction {
  type: typeof GET_CITY_PENDING;
  isLoading: boolean;
}

export interface GetCitySuccessAction {
  type: typeof GET_CITY_SUCCESS;
  city: City;
}

export interface GetCityFailedAction {
  type: typeof GET_CITY_FAILED;
  errorMessage: string;
}

export interface SelectCityAction {
  type: typeof SELECT_CITY;
  city: City;
}

export interface ClearDataAction {
  type: typeof CLEAR_DATA;
  isLoading: true;
}

export type CitiesActionTypes =
  | GetCityPendingAction
  | GetCitySuccessAction
  | GetCityFailedAction
  | SelectCityAction
  | ClearDataAction;

export {
  GET_CITY_FAILED,
  GET_CITY_SUCCESS,
  GET_CITY_PENDING,
  SELECT_CITY,
  CLEAR_DATA,
};
