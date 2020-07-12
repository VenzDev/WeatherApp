import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../icons/plus.png";
import AddCityModal from "./AddCityModal";

const Div = styled.div`
  transition: 0.2s;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
const Img = styled.img`
  height: 50%;
  margin: 0 auto;
`;

const AddCityCard = () => {
  const [isModal, setModal] = useState(false);
  const toggleModal = () => setModal(!isModal);

  return (
    <>
      {isModal && <AddCityModal toggleModal={toggleModal} />}
      <Div onClick={toggleModal} className="col-xl-2 col-lg-4 col-md-6 mb-3">
        <div className="card shadow">
          <div
            style={{ height: "170px" }}
            className="card-body d-flex flex-column"
          >
            <Img src={plus} alt="plus" />
            <p className="py-2 text-center">Add City</p>
          </div>
        </div>
      </Div>
    </>
  );
};

export default AddCityCard;
