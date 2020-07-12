import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: ${(props: StyledProps) => props.border};
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
export interface Props {
  border: string;
}
interface StyledProps {
  border: string;
}
const LoadingSpinner: React.SFC<Props> = ({ border }) => {
  return <Spinner border={border} />;
};

export default LoadingSpinner;
