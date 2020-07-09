import styled from "styled-components";

interface props {
  margin: "lg" | "sm";
}

const Input = styled.input`
  border-radius: 10rem;
  padding: 1.5rem 1rem;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  border-radius: 10rem;
`;

const StyledLink = styled.div`
  margin: ${(props: props) => (props.margin === "lg" ? "2rem" : "1rem")};
  display: block;
  text-align: center;
  color: blue;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    font-weight: 500;
  }
  & a {
    text-decoration: none;
  }
`;

export { Input, Button, StyledLink };
