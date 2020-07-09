import React, { useState, FormEvent } from "react";
import { Button, Input, StyledLink } from "../FormContainer/Form.styled";
import { Link } from "react-router-dom";
import { register } from "../../api/apiCalls";

const RegisterForm: React.SFC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const handleSurname = (e: FormEvent<HTMLInputElement>) =>
    setSurname(e.currentTarget.value);

  const handleLogin = (e: FormEvent<HTMLInputElement>) =>
    setLogin(e.currentTarget.value);

  const handlePassword = (e: FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await register({ name, surname, login, password });
    console.log(data);
  };
  return (
    <div className="col-lg-6">
      <div className="p-lg-5 p-3">
        <h3 className="text-center py-1">Weather App</h3>
        <h4 className="text-center py-2">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              onChange={handleName}
              className="form-control"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <Input
              onChange={handleSurname}
              className="form-control"
              type="text"
              placeholder="Surname"
            />
          </div>
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
              Register
            </Button>
          </div>
        </form>
        <StyledLink margin="sm">
          <Link to="/">Back to Login</Link>
        </StyledLink>
      </div>
    </div>
  );
};

export default RegisterForm;
