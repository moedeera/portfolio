import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { SiteContext } from "../../../context/Context";

export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(SiteContext);

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }, [error]);

  useEffect(() => {
    if (user?.logged) {
      navigate("/profile");
    }
  }, [user]);

  const [count, setCount] = useState(1);
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const onChangeHandler = (e, type) => {
    if (type === "password") {
      setForm({ ...form, password: e.target.value });
    } else if (type === "email") {
      setForm({ ...form, email: e.target.value });
    } else if (type === "name") {
      setForm({ ...form, name: e.target.value });
    }
  };

  const onSubmit = async () => {
    console.log(form);
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const res = await axios.post(
        "https://auction-website89.herokuapp.com/content/login",
        body,
        config
      );

      console.log(res.data);
      setStatus(true);
      let fetchedUser = {
        token: res.data.token,
        logged: true,
      };
      setUser(fetchedUser);
      setLoading(false);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("../profile");
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="login-form-container">
        <div className="login-form">
          <h1>Login</h1>
          <div>
            {" "}
            <i className="fas fa-user"></i>
            <input
              value={form.name}
              onChange={(e) => {
                onChangeHandler(e, "name");
              }}
              type="text"
              name="name"
              placeholder="Enter Your Username"
            />
          </div>
          <div>
            {" "}
            <i className="fas fa-lock"></i>
            <input
              value={form.password}
              onChange={(e) => {
                onChangeHandler(e, "password");
              }}
              type="text"
              name="name"
              placeholder="Enter Your Password"
            />
          </div>

          <button
            onClick={() => {
              onSubmit();
            }}
            className="btn-admin"
          >
            Login
          </button>

          {error ? "Incorrect username or password" : ""}
          {loading ? "loading" : ""}
          {/* <h3>or</h3>
          <button className="btn-admin">Register</button> */}
        </div>
      </div>
    </div>
  );
};
