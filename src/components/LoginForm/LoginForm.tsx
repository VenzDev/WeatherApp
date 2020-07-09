import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button, Input, StyledLink } from "../FormContainer/Form.styled";
import { login as loginMethod } from "../../api/apiCalls";

const Form: React.SFC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLInputElement>) =>
    setLogin(e.currentTarget.value);

  const handlePassword = (e: FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await loginMethod({ login, password });
    console.log(data);
  };

  return (
    <div className="col-lg-6">
      <div className="p-lg-5 p-3">
        <h3 className="text-center py-2">Weather App</h3>
        <h4 className="text-center py-3">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              onChange={handleLogin}
              className="form-control"
              type="text"
              placeholder="Login"
            />
          </div>
          <div className="form-group">
            <Input
              onChange={handlePassword}
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <Button className="btn btn-primary btn-block text-white">
              Login
            </Button>
          </div>
        </form>
        <StyledLink margin="lg">
          <Link to="/register">Create An Account!</Link>
        </StyledLink>
      </div>
    </div>
  );
};

export default Form;
