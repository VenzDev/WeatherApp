import React, { useEffect } from "react";
import CityCard from "../CityCard";
import AddCityCard from "../AddCityCard";
import { useSelector } from "react-redux";
import WeatherBar from "../WeatherBar";

export interface LeftPanelProps {}

interface State {
  citiesReducer: {
    cities: Array<city>;
  };
}
interface city {
  id: number;
  name: String;
}

const LeftPanel: React.SFC<LeftPanelProps> = () => {
  const citiesData = useSelector((state: State) => state.citiesReducer);
  const toCelvin = (kelvin: number) => (kelvin - 272.15).toFixed(2) + "C";
  return (
    <div className="col-xl-8 bg-light">
      <div className="row m-4">
        <h3>Weather Forecast</h3>
      </div>
      <div className="row m-4">
        {citiesData.cities.length > 0 &&
          citiesData.cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        <AddCityCard />
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
      <div className="row m-4 align-items-center">
        <div className="col lg-4">xd</div>
        <WeatherBar temp={300} />
        <div className="col lg-2">{toCelvin(300)}</div>
      </div>
    </div>
  );
};

export default LeftPanel;
