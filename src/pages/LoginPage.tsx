import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export interface LoginPageProps {}

const LoginPage: React.SFC<LoginPageProps> = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
