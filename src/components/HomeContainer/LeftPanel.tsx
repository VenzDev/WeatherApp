import React from "react";
import WeatherBar from "../WeatherBar";

export interface LeftPanelProps {}

const LeftPanel: React.SFC<LeftPanelProps> = () => {
  return (
    <div className="col-xl-8 bg-light">
      <div style={{ width: "100px" }}>
        <WeatherBar temp={300} />
      </div>
      <WeatherBar temp={270} />
      <WeatherBar temp={260} />
      <WeatherBar temp={250} />
    </div>
  );
};

export default LeftPanel;
