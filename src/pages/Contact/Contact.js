import React from "react";
import "./Contact.css";
import pic1 from "./saly-28.png";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header-container">
        <PageHeader tagline={"Contact"} header={"Get In touch"} />
      </div>
      <div className="contact-page-container">
        <div className="contact-form">
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
          <div className="contact-form-box">
            <div className="cf-form">
              <h1> Message Me</h1>
              <input placeholder="Enter Name" />
              <input placeholder="Enter Email" />
              <textarea placeholder="Enter Message" />
              <button className="btn btn-alternate">Send Message</button>
            </div>
            <div className="cf-image">
              <img src={pic1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-right"></div>
    </div>
  );
};
