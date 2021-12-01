import React from "react";

const form = () => {
  return (
    <div className="form">
      <h2>Create an Account</h2>
      <div className="form-inputs">
        <label className="form-label"></label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter Mobile"
        />
      </div>
      <div className="form-inputs">
        <label className="form-label"></label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter Email"
        />
      </div>
      <div className="form-inputs">
        <label className="form-label"></label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter Password"
        />
      </div>
      <div className="form-inputs">
        <label className="form-label"></label>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Confirm Password"
        />
      </div>

      <input className="checkbox" type="checkbox" name="username" />
      <label className="checkbox-p">
        I hearby confirm that I am above 18 years old.
      </label>

      <button className="form-input-btn" type="submit">
        Verify OTP
      </button>
      <span className="form-input-login">
        By creating this account, you agree to our{" "}
        <a href="#"> Privacy Policy</a> and <a href="#">Terms of Use</a>
      </span>
    </div>
  );
};

export default form;
