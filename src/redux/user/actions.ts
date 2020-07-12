import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  UPDATE_PENDING,
  UPDATE_FAILED,
  UPDATE_SUCCESS,
  UserActionTypes,
} from "./types";
import { User } from "./userState";

const loginPending = (): UserActionTypes => ({
  type: LOGIN_PENDING,
  isLoading: true,
});
const loginSuccess = (user: User): UserActionTypes => ({
  type: LOGIN_SUCCESS,
  user,
});
const loginFailed = (errorMessage: string): UserActionTypes => ({
  type: LOGIN_FAILED,
  errorMessage,
});

const logout = (): UserActionTypes => ({ type: LOGOUT, isLoading: false });

const updatePending = (): UserActionTypes => ({
  type: UPDATE_PENDING,
  isLoading: false,
});

const updateSuccess = (favCities: Array<string>): UserActionTypes => ({
  type: UPDATE_SUCCESS,
  favCities,
});

const updateFailed = (): UserActionTypes => ({
  type: UPDATE_FAILED,
  isLoading: false,
});

export default {
  loginPending,
  loginSuccess,
  loginFailed,
  logout,
  updatePending,
  updateSuccess,
  updateFailed,
};
