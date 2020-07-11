import { login as loginMethod, updateUserCities } from "../../api/apiCalls";
import actions from "./actions";

interface loginData {
  email: String;
  password: String;
}

const login = (data: loginData) => async (dispatch: any) => {
  try {
    dispatch(actions.loginPending());
    const users = await loginMethod(data);
    if (users !== null) {
      for (let key in users) {
        if (
          users[key].email === data.email &&
          users[key].password === data.password
        ) {
          console.log(key);
          if (!users[key].hasOwnProperty("favCities"))
            //Firebase hack
            return dispatch(
              actions.loginSuccess({ ...users[key], favCities: [], id: key })
            );
          else
            return dispatch(actions.loginSuccess({ ...users[key], id: key }));
        }
      }
      return dispatch(actions.loginFailed("Invalid Credentials"));
    } else {
      return dispatch(actions.loginFailed("Invalid Credentials"));
    }
  } catch (err) {
    if (err) return dispatch(actions.loginFailed("Invalid Credentials"));
  }
};
const logout = () => (dispatch: any) => {
  dispatch(actions.logout());
};

const updateCities = (id: String, citiesArray: Array<String>) => async (
  dispatch: any
) => {
  try {
    dispatch(actions.updatePending());
    const fetchedArray = await updateUserCities(id, citiesArray);
    if (fetchedArray) return dispatch(actions.updateSuccess(fetchedArray));
  } catch (err) {
    if (err) return dispatch(actions.updateFailed());
  }
};

export default { login, logout, updateCities };
