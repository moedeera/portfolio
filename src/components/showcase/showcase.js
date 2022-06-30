import React, { useState } from "react";
import "./showcase.css";
import { useEffect, useRef } from "react";
import pic1 from "./Saly-36.png";
import pic2 from "./pngegg.png";
import pic3 from "./react.png";
import pic4 from "./wordpress.png";
import pic5 from "./webflow.png";
import Lottie from "lottie-web";

export const Showcase = () => {
  const container = useRef(null);
  const [text, setText] = useState("Design");
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./showcase.json"),
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(text);
      if (text === "Design") {
        setText("Apps");
      } else if (text === "Apps") {
        setText("Hosting");
      } else if (text === "Hosting") {
        setText("Design");
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <div className="container showcase">
      <div className="showcase-container">
        <div className="showcase-image">
          <img src={pic1} alt="hello" />
        </div>
        <div className="showcase-text">
          <h1 style={{ fontWeight: "400" }}>Solutions for</h1>
          <div className="span-container">
            <h1 className="span-1">
              Web
              <span style={{ color: "var(--primary-color)" }}>Design</span>{" "}
            </h1>
          </div>

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
        <div className="large-left"></div>

        <div className="large">
          <div className="showcase-large-skills">
            <div className="showcase-skills-header">
              <h1>My Areas</h1>
            </div>
            <div className="showcase-skills">
              <div>
                <img src={pic3} alt="" />
              </div>
              <div>
                <img src={pic4} alt="" />
              </div>
              <div>
                <img src={pic5} alt="" />
              </div>
            </div>
          </div>
          <div className="showcase-cta large-cta">
            <div className="showcase-contact-text">
              <div className="showcase-h3">
                <h2>Any Inquiries?</h2>
                <h2 style={{ color: "gold" }}>Questions?</h2>
              </div>
              <span className="circle"></span>
            </div>
            <div className="showcase-contact-form">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <textarea placeholder="Send A message" />
              {/* <h3>Submit</h3> */}
              <div className="btn-send">SEND</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
