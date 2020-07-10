import axios from "axios";
import { userUri } from "./apiEndpoints";

interface registerData {
  name: String;
  surname: String;
  email: String;
  password: String;
}

interface loginData {
  email: String;
  password: String;
}

const register = async (data: registerData) => {
  const fetchedData = await axios.post(userUri, {
    ...data,
    favCities: ["noCity"],
  });
  return fetchedData.data;
};
const login = async (data: loginData) => {
  const fetchedData = await axios.get(userUri);
  return fetchedData.data;
};
export { register, login };
