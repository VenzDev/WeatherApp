import React from "react";
import styled from "styled-components";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const Container = styled.div`
  min-height: 90vh;
  margin: 0 30px;
  background-color: white;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 50%);
  border-radius: 6px;
`;

export interface HomeContainerProps {}

const HomeContainer: React.SFC<HomeContainerProps> = () => {
  return (
    <Container>
      <div className="container-fluid">
        <div style={{ minHeight: "90vh" }} className="row">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </Container>
  );
};

export default HomeContainer;
