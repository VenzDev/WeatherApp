import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const ModalContainer = styled.div`
  width: 60%;
  height: 70%;
  top: 50%;
  left: 50%;
  border-radius: 26px;
  box-shadow: 0px 6px 12px rgba($color: #000000, $alpha: 0.3);
  position: absolute;
  background-color: #fff;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  font-size: 2rem;
  padding: 5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 6%;
  top: 10%;
`;

export interface ModalProps {
  toggleModal: Function;
}

const Modal: React.SFC<ModalProps> = ({ children, toggleModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={() => toggleModal()} className="btn btn-primary">
          Close
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
