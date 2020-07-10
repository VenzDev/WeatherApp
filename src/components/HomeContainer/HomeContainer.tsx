import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 90vh;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 50%);
  border-radius: 6px;
`;

export interface HomeContainerProps {}

const HomeContainer: React.SFC<HomeContainerProps> = () => {
  return <Container>HelloWorld</Container>;
};

export default HomeContainer;
