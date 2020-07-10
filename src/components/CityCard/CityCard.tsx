import React from "react";
import city from "../../images/city.png";
import styled from "styled-components";

export interface CityCardProps {}

const Div = styled.div`
  transition: 0.2s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const CityCard: React.SFC<CityCardProps> = () => {
  return (
    <Div className="col-xl-2 col-lg-4 col-md-6 mb-3">
      <div style={{ borderRadius: "10px" }} className="card shadow">
        <div className="card-body  p-0">
          <div>
            <img
              style={{ width: "100%", height: "170px" }}
              src={city}
              alt="city"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center">Rzeszów</h5>
      </div>
    </Div>
  );
};

export default CityCard;
