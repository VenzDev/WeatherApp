import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGIN_PENDING,
  LOGOUT,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
  UPDATE_PENDING,
  UserActionTypes,
} from "./types";
import { UserState } from "./userState";

const initState: UserState = {
  isLoading: false,
  user: {
    email: "",
    favCities: [],
    name: "",
    password: "",
    surname: "",
    id: "",
  },
  errorMessage: "",
};

const userReducer = (state = initState, action: UserActionTypes) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, isLoading: action.isLoading };
    case LOGIN_SUCCESS:
      return { ...state, user: action.user, isLoading: false };
    case LOGIN_FAILED:
      return { ...initState, errorMessage: action.errorMessage };
    case LOGOUT:
      return initState;
    case UPDATE_PENDING:
      return { ...state, isLoading: true };
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: { ...state.user, favCities: action.favCities },
        isLoading: false,
        errorMessage: "",
      };
    case UPDATE_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;
