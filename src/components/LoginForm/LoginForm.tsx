import React from "react";
import FormImage from "./FormImage";
import Form from "./Form";

export interface LoginFormProps {}

const LoginForm: React.SFC<LoginFormProps> = () => {
  return (
    <div style={{ height: "100vh" }} className="container">
      <div
        style={{ height: "100%" }}
        className="row justify-content-center align-items-center"
      >
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row">
                <FormImage />
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
