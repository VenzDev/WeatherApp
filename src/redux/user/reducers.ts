import types from "./types";

const initState = {
  isLoading: false,
  user: {},
  errorMessage: "",
};

const userReducer = (state = initState, action: any) => {
  switch (action.type) {
    case types.LOGIN_PENDING:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case types.LOGIN_FAILED:
      return {
        ...state,
        user: {},
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
