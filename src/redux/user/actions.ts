import types from "./types";

interface user {
  email: String;
  password: String;
  favCites: Array<String>;
}

const loginPending = () => ({ type: types.LOGIN_PENDING, payload: true });
const loginSuccess = (user: user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});
const loginFailed = (errorMessage: String) => ({
  type: types.LOGIN_FAILED,
  payload: errorMessage,
});

const logout = () => ({ type: types.LOGOUT, payload: false });

export default {
  loginPending,
  loginSuccess,
  loginFailed,
  logout,
};
