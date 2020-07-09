import React from "react";
import styled from "styled-components";

const ErrorDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    font-size: 12rem;
  }
  span {
    font-size: 6rem;
  }
`;

export interface ErrorPageProps {}

const ErrorPage: React.SFC<ErrorPageProps> = () => {
  return (
    <ErrorDiv>
      <p>404</p>
      <span>Page Not Found</span>
    </ErrorDiv>
  );
};

export default ErrorPage;
