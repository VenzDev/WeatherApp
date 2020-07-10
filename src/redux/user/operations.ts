import { login as loginMethod } from "../../api/apiCalls";
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
          if (!users[key].hasOwnProperty("favCities"))
            //Firebase hack
            return dispatch(
              actions.loginSuccess({ ...users[key], favCities: [] })
            );
          else return dispatch(actions.loginSuccess(users[key]));
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

export default { login };
