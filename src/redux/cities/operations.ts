import actions from "./actions";
import { getCity } from "../../api/apiCalls";
import { Dispatch } from "redux";

const getCityMethod = (id: String) => async (dispatch: Dispatch) => {
  dispatch(actions.getCityPending());
  const data = await getCity(id);
  return dispatch(actions.getCitySuccess(data));
};

const clearData = () => (dispatch: Dispatch) => {
  dispatch(actions.clearData());
};

const selectCity = (city: Object) => (dispatch: Dispatch) => {
  dispatch(actions.selectCity(city));
};

export default { getCityMethod, clearData, selectCity };
