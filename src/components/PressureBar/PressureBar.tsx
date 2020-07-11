import React from "react";

export interface PressureBarProps {
  pressure: number;
}

const PressureBar: React.SFC<PressureBarProps> = ({ pressure }) => {
  const pressure_min = 900;
  const scale = 2;
  return (
    <div className="col-lg-6 bg-white m-4 border border-primary">
      <div className="row">
        <div className="progress bg-white " style={{ width: "100%" }}>
          <div
            className="progress-bar bg-primary"
            style={{ width: (pressure - pressure_min) / scale + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PressureBar;
