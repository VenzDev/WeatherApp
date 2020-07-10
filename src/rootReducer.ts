import userReducer from "./redux/user";
import { combineReducers } from "redux";

const initState = {
  helloWorld: "helloWorld",
};

export interface action {
  type: String;
}

const helloWorldReducer = (state = initState, action: action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const rootReducer = combineReducers({ userReducer, helloWorldReducer });

export default rootReducer;
