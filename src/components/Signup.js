import React from "react";
import Client from "./Client.js";
import Form from "./Form.js";

const Signup = () => {
  return (
    <div className="form-container">
      <div className="form-content-left">
        <Form />
      </div>
      <div className="form-content-right">
        <Client />
      </div>
    </div>
  );
};

export default Signup;
