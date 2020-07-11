import React from "react";

export interface WeatherBarProps {
  temp: number;
}

const WeatherBar: React.SFC<WeatherBarProps> = ({ temp }) => {
  const kelvinDeg = 272.15;
  const celDeg = temp - kelvinDeg;
  const isPositive = celDeg >= 0 ? true : false;

  const scale = 100 / 40;
  return isPositive ? (
    <div className="col-lg-6 bg-white m-4 border border-warning">
      <div className="row">
        <div className="progress bg-white " style={{ width: "50%" }}>
          <div className="progress-bar bg-white" style={{ width: 0 }}></div>
        </div>
        <div className="progress bg-white" style={{ width: "50%" }}>
          <div
            className="progress-bar bg-warning rounded-0"
            style={{ width: celDeg * scale + "%" }}
          ></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="col-lg-6 bg-white m-4 border border-primary">
      <div className="progress bg-primary rounded-0" style={{ width: "50%" }}>
        <div
          className="progress-bar bg-white"
          style={{ width: 100 + celDeg * scale + "%" }}
        ></div>
      </div>
      <div className="progress bg-white" style={{ width: "50%" }}>
        <div className="progress-bar" style={{ width: 0 }}></div>
      </div>
    </div>
  );
};

export default WeatherBar;
