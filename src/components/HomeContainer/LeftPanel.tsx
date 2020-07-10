import React from "react";
import CityCard from "../CityCard";
import AddCityCard from "../AddCityCard";

export interface LeftPanelProps {}

const LeftPanel: React.SFC<LeftPanelProps> = () => {
  return (
    <div className="col-xl-8 bg-light">
      <div className="row m-4">
        <h3>Weather Forecast</h3>
      </div>
      <div className="row m-4">
        <CityCard />
        <CityCard />
        <AddCityCard />
      </div>
    </div>
  );
};

export default LeftPanel;
