import React from "react";
import cityImage from "../../images/city.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cities } from "../../redux/cities";

export interface CityCardProps {
  city: {
    id: number;
    name: String;
  };
}

const Div = styled.div`
  transition: 0.2s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const CityCard: React.SFC<CityCardProps> = ({ city }) => {
  const dispatch = useDispatch();
  const handleSelectCity = () => dispatch(cities.selectCity(city));

  return (
    <Div onClick={handleSelectCity} className="col-xl-2 col-lg-4 col-md-6 mb-3">
      <div style={{ borderRadius: "10px" }} className="card shadow">
        <div className="card-body  p-0">
          <div>
            <img
              style={{ width: "100%", height: "170px" }}
              src={cityImage}
              alt="city"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-center">{city.name}</h5>
      </div>
    </Div>
  );
};

export default CityCard;
