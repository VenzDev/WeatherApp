import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherIconsUri } from "../../api/apiEndpoints";
import { user as userRedux } from "../../redux/user";
import { cities } from "../../redux/cities";

export interface CityDescProps {}

const CityDesc: React.SFC<CityDescProps> = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state: any) => state.selectedCityReducer);
  const { user } = useSelector((state: any) => state.userReducer);
  const favCities = user.favCities;
  const isCity = Object.keys(city).length > 0;

  //Convert to km/h from m/sec
  const windSpeed = (speed: number) => 3.6 * speed;
  const style = "text-white text-center";

  const handlexD = () => {
    favCities.push("420006353");
    dispatch(userRedux.updateCities(user.id, favCities));
    dispatch(cities.getCityMethod("420006353"));
  };

  return isCity ? (
    <div>
      <h3 className={style}>{city.name}</h3>
      <img
        src={weatherIconsUri + city.weather[0].icon + "@4x.png"}
        alt="clouds"
      />
      <h3 className={style + " mb-5"}>{city.weather[0].description}</h3>
      <h5 className={style}>
        Wind: {windSpeed(city.wind.speed).toFixed(2)} km/h
      </h5>
      <h5 className={style}>Humidity: {city.main.humidity}%</h5>
      <button onClick={handlexD} className="p-1 my-4 btn btn-primary btn-block">
        Show Temperature Chart
      </button>
      <button onClick={handlexD} className="p-1 my-4 btn btn-primary btn-block">
        Show Pressure Chart
      </button>
    </div>
  ) : null;
};

export default CityDesc;
