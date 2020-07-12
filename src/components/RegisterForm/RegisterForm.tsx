import React, { useState, FormEvent } from "react";
import { Button, Input, StyledLink } from "../FormContainer/Form.styled";
import { Link, RouteComponentProps } from "react-router-dom";
import { register } from "../../api/apiCalls";
import { withRouter } from "react-router-dom";
import showToast from "../../utils/showToast";

interface RegisterProps extends RouteComponentProps<any> {}

const RegisterForm: React.SFC<RegisterProps> = ({ history }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleName = (e: FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  const handleSurname = (e: FormEvent<HTMLInputElement>) =>
    setSurname(e.currentTarget.value);

  const handleEmail = (e: FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handlePassword = (e: FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputs({ name, surname, email, password })) {
      setErrorMessage("Inputs cannot be empty");
      return;
    }
    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }
    setLoading(true);
    register({ name, surname, email, password }).then((res) => {
      setLoading(false);
      if (res.name) {
        showToast("Register Successful");
        history.push("/");
      } else {
        setErrorMessage("Something went wrong");
      }
    });
  };

  const RegisterButton: React.SFC = ({ children }) => {
    return (
      <Button className="btn btn-primary btn-block text-white">
        {children}
      </Button>
    );
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
              onChange={handleEmail}
              className="form-control"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Input
              onChange={handlePassword}
              className="form-control"
              type="password"
              placeholder="Password"
            />
            {!isLoading ? (
              <RegisterButton>Register</RegisterButton>
            ) : (
              <RegisterButton>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </RegisterButton>
            )}
          </div>
        </form>
        <StyledLink margin="sm">
          <Link to="/">Back to Login</Link>
        </StyledLink>
        <h5 className="text-center text-danger">{errorMessage}</h5>
      </div>
    </div>
  );
};

interface inputs {
  name: String;
  surname: String;
  email: String;
  password: String;
}

function validateInputs(data: inputs) {
  if (
    data.name.trim().length === 0 ||
    data.surname.trim().length === 0 ||
    data.email.trim().length === 0 ||
    data.password.trim().length === 0
  ) {
    return false;
  }
  return true;
}
//BASIC VALIDATE
function validatePassword(password: string) {
  if (password.trim().length >= 6) return true;
  return false;
}

export default withRouter(RegisterForm);
