import React, { useState } from "react";
import { useSelector } from "react-redux";
import { weatherIconsUri } from "../../api/apiEndpoints";
import Modal from "../Modal";
import { prepareTempData, prepareHumidityData } from "./prepareData";
import Chart from "./Chart";
import LoadingSpinner from "../LoadingSpinner";
import { getCityDataChart } from "../../api/apiCalls";
import HumidityChart from "./HumidityChart";
import { AppState } from "../../configureStore";
import { SelectedCityState } from "../../redux/cities/citiesState";
export interface CityDescProps {}

const CityDesc: React.SFC<CityDescProps> = () => {
  const [isHumidityChart, setHumidityChart] = useState(false);
  const [isTempChart, setTempChart] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { city } = useSelector(
    (state: AppState): SelectedCityState => state.selectedCityReducer
  );
  const isCity = city.id !== null;

  //Convert to km/h from m/sec
  const windSpeed = (speed: number | null) => {
    if (speed === null) {
      return 0;
    } else return 3.6 * speed;
  };
  const style = "text-white text-center";

  const toggleHumidityChart = async () => {
    if (isHumidityChart || city.id === null) setHumidityChart(!isHumidityChart);
    else {
      setHumidityChart(!isHumidityChart);
      setLoading(true);
      const fetchedData = await getCityDataChart(city.id.toString());
      setData(prepareHumidityData(fetchedData));
      setLoading(false);
    }
  };
  const toggleTempChart = async () => {
    if (isTempChart || city.id === null) setTempChart(!isTempChart);
    else {
      setTempChart(!isTempChart);
      setLoading(true);
      const fetchedData = await getCityDataChart(city.id.toString());
      setData(prepareTempData(fetchedData));
      setLoading(false);
    }
  };

  return isCity ? (
    <div>
      {isTempChart && (
        <Modal toggleModal={toggleTempChart} width="90%" height="90%">
          {isLoading ? (
            <LoadingSpinner border="6px solid #000" />
          ) : (
            <>
              <h5>Temperature Chart</h5>
              <h5>{city.name}</h5>
              <Chart preparedData={data} />
            </>
          )}
        </Modal>
      )}
      {isHumidityChart && (
        <Modal toggleModal={toggleHumidityChart} width={"90%"} height={"90%"}>
          {" "}
          {isLoading ? (
            <LoadingSpinner border="6px solid #000" />
          ) : (
            <>
              <h5>Humidity Chart</h5>
              <h5>{city.name}</h5>
              <HumidityChart preparedData={data} />
            </>
          )}
        </Modal>
      )}

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
      <button
        onClick={toggleTempChart}
        className="p-1 my-4 btn btn-primary btn-block"
      >
        Show Temperature Chart
      </button>
      <button
        onClick={toggleHumidityChart}
        className="p-1 my-4 btn btn-primary btn-block"
      >
        Show Humidity Chart
      </button>
    </div>
  ) : null;
};

export default CityDesc;
