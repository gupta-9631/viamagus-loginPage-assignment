import React, { useState } from "react";
import "./LoginPage.css";
import img from "./img/tree.jpg";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState();

  const changeHandle = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setValue(value);
  };

  const submitHandle = () => {
    if (!value) {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="header-container">
        <div className="header-image"></div>
      </div>
      <div className="login-container">
        <div className="logo">
          <img src="https://i.ibb.co/T4KL0vH/download-2.jpg" alt="" />
        </div>
        <h1 style={{ color: "#4CAF50" }}>Login</h1>
        <div className="sub-heading">
          <img src={img} alt="" />
        </div>
        <hr className="underline"></hr>
        <form className="form" onSubmit={submitHandle}>
          <input type="text" placeholder="Email" onChange={changeHandle} />
          {error && <p className="error-text">The email field is required</p>}
          <input type="text" placeholder="Password" />
          <button className="btn">Sign In</button>
          <div className="user-message">
            <p>Forgot Password?</p>
            <p className="signup-text">New User? Sign Up</p>
          </div>
          <p>or</p>
          <div className="social-login">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p className="btn-text">CONTINUE WITH GOOGLE</p>
            </div>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://raw.githubusercontent.com/eswarasai/social-login/master/img/facebook.svg?sanitize=true"
                  alt=""
                />
              </div>
              <p className="btn-text">CONTINUE WITH FACEBOOK</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
