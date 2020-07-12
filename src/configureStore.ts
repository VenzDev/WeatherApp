import userReducer from "./redux/user";
import { citiesReducer, selectedCityReducer } from "./redux/cities";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "./redux/appType";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  userReducer,
  citiesReducer,
  selectedCityReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
