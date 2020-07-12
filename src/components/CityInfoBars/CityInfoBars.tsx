import React from "react";
import { useSelector } from "react-redux";
import WeatherBar from "../WeatherBar";
import PressureBar from "../PressureBar";
import { AppState } from "../../configureStore";
import { SelectedCityState } from "../../redux/cities/citiesState";

export interface InfoBarProps {
  temp: number;
  name: String;
}
const InfoBar: React.SFC<InfoBarProps> = ({ temp, name }) => {
  const toCelvin = (kelvin: number) => (kelvin - 272.15).toFixed(2) + "°C";
  return (
    <div className="row m-4 align-items-center">
      <div className="col lg-4 text-right">{name}</div>
      <WeatherBar temp={temp} />
      <div className="col lg-2">{toCelvin(temp)}</div>
    </div>
  );
};

const CityBarsInfo: React.SFC = () => {
  const { city } = useSelector(
    (state: AppState): SelectedCityState => state.selectedCityReducer
  );
  const isCitySelected = city.id !== null;
  return isCitySelected ? (
    <>
      <h3 className="ml-4">
        {city.name}, {city.sys.country}
      </h3>
      <InfoBar temp={city.main.temp} name="temp" />
      <InfoBar temp={city.main.temp_min} name="temp min" />
      <InfoBar temp={city.main.temp_max} name="temp max" />
      <InfoBar temp={city.main.feels_like} name="feels like" />
      <div className="row m-4 align-items-center">
        <div className="col lg-4 text-right">Pressure</div>
        <PressureBar pressure={city.main.pressure} />
        <div className="col lg-2">{city.main.pressure} hPa</div>
      </div>
    </>
  ) : (
    <h2 className="text-center">Select City for more details</h2>
  );
};

export default CityBarsInfo;
