import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "../FormContainer/Form.styled";

const RegisterLink = styled.div`
  margin: 2rem;
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

const Form: React.SFC = () => {
  return (
    <div className="col-lg-6">
      <div className="p-lg-5 p-3">
        <h3 className="text-center py-2">Weather App</h3>
        <h4 className="text-center py-3">Login</h4>
        <form>
          <div className="form-group">
            <Input className="form-control" type="text" placeholder="Login" />
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <Button className="btn btn-primary btn-block text-white">
              Login
            </Button>
          </div>
        </form>
        <RegisterLink>
          <Link to="/register">Create An Account!</Link>
        </RegisterLink>
      </div>
    </div>
  );
};

export default Form;
