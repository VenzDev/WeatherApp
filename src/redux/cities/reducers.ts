import types from "./types";

const initState = {
  isLoading: false,
  cities: [],
  errorMessage: "",
};

const initSelectedCityReducer = {
  city: {},
};

const citiesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case types.GET_CITY_PENDING:
      return { ...state, isLoading: true };
    case types.GET_CITY_SUCCESS:
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
      };
    case types.GET_CITY_FAILED:
      return initState;
    case types.CLEAR_DATA:
      return { ...state, isLoading: true, cities: [] };
    default:
      return state;
  }
};

const selectedCityReducer = (state = initSelectedCityReducer, action: any) => {
  switch (action.type) {
    case types.SELECT_CITY:
      return { city: action.payload };
    default:
      return state;
  }
};

export { citiesReducer, selectedCityReducer };
