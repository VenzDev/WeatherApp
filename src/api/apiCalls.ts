import axios from "axios";
import { userUri, weatherApiUri, updateUserUri } from "./apiEndpoints";
import { weatherApiKey } from "./apiKeys";

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
  const fetchedData = await axios.post(userUri, data);
  return fetchedData.data;
};
const login = async (data: loginData) => {
  const fetchedData = await axios.get(userUri);
  return fetchedData.data;
};

const getCity = async (id: String) => {
  const fetchedData = await axios.get(
    weatherApiUri + `?id=${id}&appid=${weatherApiKey}`
  );
  return fetchedData.data;
};

const updateUserCities = async (id: String, citiesArray: Array<String>) => {
  const fetchedData = await axios.patch(updateUserUri + id + ".json", {
    favCities: citiesArray,
  });
  return fetchedData.data.favCities;
};

export { register, login, getCity, updateUserCities };
