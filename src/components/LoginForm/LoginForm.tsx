import React, { useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { user } from "../../redux/user";
import { Link, RouteComponentProps } from "react-router-dom";
import { Button, Input, StyledLink } from "../FormContainer/Form.styled";
import { AppState } from "../../configureStore";
import { UserState } from "../../redux/user/userState";

interface loginProps extends RouteComponentProps<any> {}

const Form: React.SFC<loginProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: AppState): UserState => state.userReducer
  );

  useEffect(() => {
    if (userData.user.id.length > 0) {
      history.push("/home");
    }
    if (userData.errorMessage.length !== 0) {
      setEmail("");
      setPassword("");
    }
  }, [userData, history]);

  const handleEmail = (e: FormEvent<HTMLInputElement>) =>
    setEmail(e.currentTarget.value);

  const handlePassword = (e: FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(user.login({ email, password }));
  };

  const LoginButton: React.SFC = ({ children }) => {
    return (
      <Button className="btn btn-primary btn-block text-white">
        {children}
      </Button>
    );
  };

  return (
    <div className="col-lg-6">
      <div className="p-lg-5 p-3">
        <h3 className="text-center py-2">Weather App</h3>
        <h4 className="text-center py-3">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              onChange={handleEmail}
              value={email}
              className="form-control"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <Input
              onChange={handlePassword}
              value={password}
              className="form-control"
              type="password"
              placeholder="Password"
            />
            {!userData.isLoading ? (
              <LoginButton>Login</LoginButton>
            ) : (
              <LoginButton>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </LoginButton>
            )}
          </div>
        </form>
        <h5 className="text-center text-danger">{userData.errorMessage}</h5>
        <StyledLink margin="lg">
          <Link to="/register">Create An Account!</Link>
        </StyledLink>
      </div>
    </div>
  );
};

export default withRouter(Form);
