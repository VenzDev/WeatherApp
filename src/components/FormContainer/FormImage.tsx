import React from "react";
import loginImage from "../../images/loginImage.png";
import styled from "styled-components";

export interface FormImageProps {}

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const FormImage: React.SFC<FormImageProps> = () => {
  return (
    <div className="col-lg-6 d-none d-lg-flex">
      <Img className="flex-grow-1" src={loginImage}></Img>
    </div>
  );
};

export default FormImage;
