import { UserActionTypes } from "./user/types";
import { CitiesActionTypes } from "./cities/types";

export type AppActions = UserActionTypes | CitiesActionTypes;
