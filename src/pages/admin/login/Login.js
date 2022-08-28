import React, { useContext, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { SiteContext } from "../../../context/Context";

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(SiteContext);

  useEffect(() => {
    if (!user?.logged) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="container">
      <div className="login-form-container">
        <div className="login-form">
          <h1>Login</h1>
          <div>
            {" "}
            <i className="fas fa-user"></i>
            <input type="text" name="name" placeholder="Enter Your Email" />
          </div>
          <div>
            {" "}
            <i className="fas fa-lock"></i>
            <input type="text" name="name" placeholder="Enter Your Password" />
          </div>

          <button className="btn-admin">Login</button>
          <h3>or</h3>
          <button className="btn-admin">Register</button>
        </div>
      </div>
    </div>
  );
};
