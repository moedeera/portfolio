import React from "react";
import "./showcase.css";
import { useEffect, useRef } from "react";
import pic1 from "./Saly-36.png";
import pic2 from "./pngegg.png";
import Lottie from "lottie-web";

export const Showcase = () => {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./showcase.json"),
    });
  }, []);

  return (
    <div className="container showcase">
      <div className="showcase-container">
        <div className="showcase-image">
          <img src={pic1} alt="hello" />
        </div>
        <div className="showcase-text">
          <h1 style={{ fontWeight: "400" }}>Solutions for</h1>
          <h1>
            Web<span style={{ color: "var(--primary-color)" }}>Design</span>{" "}
          </h1>
          <h1 className="text" style={{ fontWeight: "500" }}>
            and development
          </h1>
          <div className="showcase-text-button">
            <button className="btn btn-secondary">Portfolio </button>
          </div>
        </div>
        <div className="showcase-lottie" ref={container}></div>
        <div className="showcase-cta small">
          <button className="btn btn-secondary">
            See Portfolio{" "}
            <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </button>
          <button className="btn btn-alternate">
            Contact <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="large-container">
        <div className="large">
          <div className="showcase-large-skills">
            <div className="showcase-skills-header">
              <h1>My Skills</h1>
            </div>
            <div className="showcase-skills">
              <div>
                <i className="fab fa-react fa-3x"></i>
              </div>
              <div>
                <i className="fab fa-wordpress fa-3x"></i>
              </div>
              <div>
                <i className="fab fa-js fa-3x"></i>
              </div>
            </div>
          </div>
          <div className="showcase-cta large-cta">
            <div className="showcase-contact-text">
              <div className="showcase-circle"></div>
              <div className="showcase-h3">
                <h3>Any Inquiries?</h3>
              </div>
            </div>
            <div className="showcase-contact-form">
              <input placeholder="email" />
              <input placeholder="email" />
              <textarea />
              <h3>Submit</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
