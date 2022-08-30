import React, { useEffect, useState } from "react";
import "./Contact.css";
import pic1 from "./saly-28.png";
import pic2 from "./contact1.jpg";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Fade } from "react-reveal";
import axios from "axios";

export const Contact = () => {
  const [count, setCount] = useState(1);
  const [sent, setSent] = useState(false);
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

  const onSubmit = async () => {
    console.log(message);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(message);
      const res = await axios.post(
        "https://auction-website89.herokuapp.com/bids/message",
        body,
        config
      );
      console.log(res.data);
      setSent(true);
      setCount(count + 1);
      setMessage({
        name: "",
        email: "",
        messageText: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSent(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [count, setMessage]);

  return (
    <div className="contact-page">
      <div className="contact-header-container">
        <PageHeader tagline={"Contact"} header={"Get In touch"} />
      </div>
      <div className="contact-page-container">
        <div className="contact-form">
          <Fade>
            <div className="contact-form-text">
              <div>
                <h3>
                  Send me any inquiries regarding services or potential
                  employment
                </h3>
                <p>
                  Need to contact me for a a job or employment purposes? just
                  send me a quick message and I should respond to you as soon as
                  possible.
                </p>

                <h3>Platforms </h3>
                <h3 style={{ color: "black" }}>
                  <i
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-linkedin-square fa-2x"
                    aria-hidden="true"
                  ></i>

                  <i class="fa fa-medium fa-2x" aria-hidden="true"></i>

                  <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                </h3>
              </div>
            </div>
          </Fade>
          <Fade>
            <div className="contact-form-box">
              <div className="cf-form">
                <i className="fas fa-comment-alt"></i>
                <h2> Message Me</h2>
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

                {sent ? (
                  <h3 style={{ color: "lightgreen" }}>Succesfully sent!</h3>
                ) : (
                  <button
                    onClick={() => {
                      onSubmit();
                    }}
                    className="btn-contacts"
                  >
                    Send Message
                  </button>
                )}
              </div>

              {/* <div className="cf-image">
                <img src={pic1} alt="" />
              </div> */}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
