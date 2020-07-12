import React from "react";
import styled from "styled-components";

export interface Props {
  width: string;
  height: string;
}

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
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
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
  width: string;
  height: string;
}

const Modal: React.SFC<ModalProps> = ({
  children,
  toggleModal,
  width,
  height,
}) => {
  return (
    <ModalBackground>
      <ModalContainer width={width} height={height}>
        <CloseButton onClick={() => toggleModal()} className="btn btn-primary">
          Close
        </CloseButton>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
