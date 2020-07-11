import React from "react";
import { useSelector } from "react-redux";
import WeatherBar from "../WeatherBar";

export interface InfoBarProps {
  temp: number;
  name: String;
}
const InfoBar: React.SFC<InfoBarProps> = ({ temp, name }) => {
  const toCelvin = (kelvin: number) => (kelvin - 272.15).toFixed(2) + "C";
  return (
    <div className="row m-4 align-items-center">
      <div className="col lg-4 text-right">{name}</div>
      <WeatherBar temp={temp} />
      <div className="col lg-2">{toCelvin(temp)}</div>
    </div>
  );
};

const CityBarsInfo: React.SFC = () => {
  const { city } = useSelector((state: any) => state.selectedCityReducer);
  const isCitySelected = Object.keys(city).length > 0;
  return isCitySelected ? (
    <>
      <InfoBar temp={city.main.temp} name="temp" />
      <InfoBar temp={city.main.temp_min} name="temp min" />
      <InfoBar temp={city.main.temp_max} name="temp max" />
      <InfoBar temp={city.main.feels_like} name="feels like" />
    </>
  ) : (
    <h2 className="text-center">Select City for more details</h2>
  );
};

export default CityBarsInfo;
