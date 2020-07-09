import React from "react";
import { Button, Input } from "../FormContainer/Form.styled";

const RegisterForm: React.SFC = () => {
  return (
    <div className="col-lg-6">
      <div className="p-lg-5 p-3">
        <h3 className="text-center py-2">Weather App</h3>
        <h4 className="text-center py-3">Register</h4>
        <form>
          <div className="form-group">
            <Input className="form-control" type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <Input className="form-control" type="text" placeholder="Surname" />
          </div>
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
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
