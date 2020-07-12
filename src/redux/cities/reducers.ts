import {
  GET_CITY_FAILED,
  GET_CITY_PENDING,
  GET_CITY_SUCCESS,
  CLEAR_DATA,
  SELECT_CITY,
  CitiesActionTypes,
} from "./types";
import { CitiesState, SelectedCityState } from "./citiesState";

const initState: CitiesState = {
  isLoading: false,
  cities: [],
  errorMessage: "",
};

const initSelectedCityReducer: SelectedCityState = {
  city: {
    id: null,
    name: "",
    weather: [{ icon: "", description: "" }],
    wind: {
      speed: null,
    },
    main: {
      humidity: null,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      pressure: 0,
      feels_like: 0,
    },
    sys: {
      country: "",
    },
  },
};

const citiesReducer = (state = initState, action: CitiesActionTypes) => {
  switch (action.type) {
    case GET_CITY_PENDING:
      return { ...state, isLoading: action.isLoading };
    case GET_CITY_SUCCESS:
      return {
        ...state,
        cities: [...state.cities, action.city],
        isLoading: false,
      };
    case GET_CITY_FAILED:
      return initState;
    case CLEAR_DATA:
      return { ...state, isLoading: action.isLoading, cities: [] };
    default:
      return state;
  }
};

const selectedCityReducer = (
  state = initSelectedCityReducer,
  action: CitiesActionTypes
) => {
  switch (action.type) {
    case SELECT_CITY:
      return { city: action.city };
    default:
      return state;
  }
};

export { citiesReducer, selectedCityReducer };
