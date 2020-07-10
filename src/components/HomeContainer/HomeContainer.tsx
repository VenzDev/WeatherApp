import React from "react";
import styled from "styled-components";
import RightPanel from "./RightPanel";

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

const RightPanelContainer = styled.div`
  background-color: #110752;
`;

export interface HomeContainerProps {}

const HomeContainer: React.SFC<HomeContainerProps> = () => {
  return (
    <Container>
      <div style={{ height: "100%" }} className="container-fluid">
        <div style={{ height: "100%" }} className="row">
          <div className="col-xl-8"></div>
          <RightPanelContainer className="col-xl-4">
            <RightPanel />
          </RightPanelContainer>
        </div>
      </div>
    </Container>
  );
};

export default HomeContainer;
