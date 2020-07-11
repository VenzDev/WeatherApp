import userReducer from "./redux/user";
import { citiesReducer, selectedCityReducer } from "./redux/cities";
import { combineReducers } from "redux";

const initState = {
  helloWorld: "helloWorld",
};

const helloWorldReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  userReducer,
  helloWorldReducer,
  citiesReducer,
  selectedCityReducer,
});

export default rootReducer;
