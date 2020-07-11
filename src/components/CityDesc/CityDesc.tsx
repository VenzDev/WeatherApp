import React from "react";
import { useSelector } from "react-redux";
import { weatherIconsUri } from "../../api/apiEndpoints";

export interface CityDescProps {}

const CityDesc: React.SFC<CityDescProps> = () => {
  const { city } = useSelector((state: any) => state.selectedCityReducer);
  const isCity = Object.keys(city).length > 0;
  isCity && console.log(city.weather[0].icon);

  //Conver to km/h, default wind is in Beaufort scale
  const windSpeed = (speed: number) => 1.852 * speed;
  const style = "text-white text-center";

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
      <button className="p-2 my-5 btn btn-primary btn-block">Show Chart</button>
    </div>
  ) : null;
};

export default CityDesc;
