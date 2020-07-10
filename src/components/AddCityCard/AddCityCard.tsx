import React from "react";
import styled from "styled-components";
import plus from "../../icons/plus.png";

export interface AddCityCardProps {}

const Div = styled.div`
  transition: 0.2s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
`;

const AddCityCard: React.SFC<AddCityCardProps> = () => {
  return (
    <Div className="col-xl-2 col-lg-4 col-md-6 mb-3">
      <div className="card shadow">
        <div style={{ height: "170px" }} className="card-body">
          <Img src={plus} alt="plus" />
          <p className="py-2">Add City</p>
        </div>
      </div>
    </Div>
  );
};

export default AddCityCard;
