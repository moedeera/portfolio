import React, { useState } from "react";
import "./Contact.css";
import pic1 from "./saly-28.png";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Fade } from "react-reveal";

export const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    messageText: "",
  });

  const onChangeHandler = (e, type) => {
    if (type === "name") {
      setMessage({ ...message, name: e.target.value });
    } else if (type === "email") {
      setMessage({ ...message, email: e.target.value });
    } else if (type === "message") {
      setMessage({ ...message, messageText: e.target.value });
    }
  };

  const onSubmit = () => {
    console.log(message);
  };

  return (
    <div className="contact-page">
      <div className="contact-header-container">
        <PageHeader tagline={"Contact"} header={"Get In touch"} />
      </div>
      <div className="contact-page-container">
        <div className="contact-form">
          <Fade left>
            <div className="contact-form-text">
              <h3>
                Send me any inquiries regarding services or potential employment
              </h3>
              <p>
                Need to contact me for a a job or employment purposes, just send
                me a quick message and I should respond to you as soon as
                possible.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="contact-form-box">
              <div className="cf-form">
                <h1> Message Me</h1>
                <input
                  placeholder="Enter Name"
                  name="name"
                  type="text"
                  value={message.name}
                  onChange={(e) => {
                    onChangeHandler(e, "name");
                  }}
                />
                <input
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  value={message.email}
                  onChange={(e) => {
                    onChangeHandler(e, "email");
                  }}
                />
                <textarea
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  value={message.messageText}
                  onChange={(e) => {
                    onChangeHandler(e, "message");
                  }}
                />
                <button
                  onClick={() => {
                    onSubmit();
                  }}
                  className="btn btn-alternate"
                >
                  Send Message
                </button>
              </div>
              <div className="cf-image">
                <img src={pic1} alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="overlay-right"></div>
    </div>
  );
};
