import React from "react";
import styled from "styled-components";

export interface WrapperProps {
  children: Object;
}

const GradientDiv = styled.div`
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe);
  background-size: cover;
  min-height: 100vh;
  padding: 5vh 0;
`;

const Wrapper: React.SFC<WrapperProps> = ({ children }) => {
  return <GradientDiv>{children}</GradientDiv>;
};

export default Wrapper;
