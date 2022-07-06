import React from "react";
import "./Contact.css";
import pic1 from "./saly-28.png";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <div className="contact-form">
          <div className="contact-form-text">
            <h3>Get in Touch</h3>
            <p>
              Need to contact me for a a job or employment purposes, just send
              me a quick message and I should respond to you as soon as
              possible.
            </p>
          </div>
          <div className="contact-form-box">
            <div className="cf-form">
              <h3> Send a message</h3>
              <input placeholder="name" />
              <input placeholder="name" />
              <textarea placeholder="name" />
              <button>Send Message</button>
            </div>
            <div className="cf-image">
              <img
                src={pic1}
                alt=""
                style={{ width: "100%", maxWidth: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-right"></div>
    </div>
  );
};
