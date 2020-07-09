import React from "react";
import styled from "styled-components";
export interface FormProps {}

const Input = styled.input`
  border-radius: 10rem;
  padding: 1.5rem 1rem;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  border-radius: 10rem;
`;

const RegisterLink = styled.a`
  margin: 2rem;
  display: block;
  text-align: center;
  color: blue;
  cursor: pointer;
`;

const Form: React.SFC<FormProps> = () => {
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
        <RegisterLink>Create An Account!</RegisterLink>
      </div>
    </div>
  );
};

export default Form;
