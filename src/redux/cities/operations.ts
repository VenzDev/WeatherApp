import actions from "./actions";
import { getCity } from "../../api/apiCalls";
import { Dispatch } from "redux";
import { CitiesActionTypes } from "./types";
import { City } from "./citiesState";

const getCityMethod = (id: string) => async (
  dispatch: Dispatch<CitiesActionTypes>
) => {
  dispatch(actions.getCityPending());
  const data = await getCity(id);
  return dispatch(actions.getCitySuccess(data));
};

const clearData = () => (dispatch: Dispatch<CitiesActionTypes>) => {
  dispatch(actions.clearData());
};

const selectCity = (city: City) => (dispatch: Dispatch<CitiesActionTypes>) => {
  dispatch(actions.selectCity(city));
};

export default { getCityMethod, clearData, selectCity };
