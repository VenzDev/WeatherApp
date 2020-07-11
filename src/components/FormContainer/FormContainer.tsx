import React from "react";
import FormImage from "./FormImage";

const FormContainer: React.SFC = ({ children }) => {
  return (
    <div style={{ minHeight: "90vh" }} className="container">
      <div
        style={{ height: "100%" }}
        className="row justify-content-center align-items-center"
      >
        <div className="col-md-9 col-lg-12 col-xl-10">
          <div className="card shadow-lg o-hidden border-0 my-3">
            <div className="card-body p-0">
              <div className="row">
                <FormImage />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
