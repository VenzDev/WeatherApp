import React from "react";
import LoginForm from "../components/LoginForm";
import FormContainer from "../components/FormContainer";

const LoginPage: React.SFC = () => {
  return (
    <div>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </div>
  );
};

export default LoginPage;
