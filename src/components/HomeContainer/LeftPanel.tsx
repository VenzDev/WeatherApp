import React from "react";
import CityCard from "../CityCard";
import AddCityCard from "../AddCityCard";
import { useSelector } from "react-redux";
import CityBarsInfo from "../CityInfoBars";

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
  return (
    <div className="col-xl-8 bg-light order-2 order-xl-1">
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
      <CityBarsInfo />
    </div>
  );
};

export default LeftPanel;
