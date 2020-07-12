import { User } from "./userState";

const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGOUT = "LOGOUT";

const UPDATE_PENDING = "UPDATE_PENDING";
const UPDATE_SUCCESS = "UPDATE_SUCCESS";
const UPDATE_FAILED = "UPDATE_FAILED";

export interface LoginPendingAction {
  type: typeof LOGIN_PENDING;
  isLoading: boolean;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: User;
}

export interface LoginFailedAction {
  type: typeof LOGIN_FAILED;
  errorMessage: string;
}

export interface UpdatePendingAction {
  type: typeof UPDATE_PENDING;
  isLoading: boolean;
}

export interface UpdateSuccessAction {
  type: typeof UPDATE_SUCCESS;
  favCities: Array<string>;
}

export interface UpdateFailedAction {
  type: typeof UPDATE_FAILED;
  isLoading: boolean;
}

export interface LogoutAction {
  type: typeof LOGOUT;
  isLoading: boolean;
}

export type UserActionTypes =
  | LoginPendingAction
  | LoginSuccessAction
  | LoginFailedAction
  | UpdatePendingAction
  | UpdateSuccessAction
  | UpdateFailedAction
  | LogoutAction;

export {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  UPDATE_PENDING,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
};
