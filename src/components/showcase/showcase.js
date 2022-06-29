import React from "react";
import "./showcase.css";
import { useEffect, useRef } from "react";
import pic1 from "./Saly-36.png";
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
    <div className="container">
      <div className="showcase-container">
        <div className="showcase-image">
          <img src={pic1} alt="hello" />
        </div>
        <div className="showcase-text">
          <h1 style={{ fontWeight: "400" }}>Solutions for</h1>
          <h1>
            Web<span style={{ color: "var(--primary-color)" }}>Design</span>{" "}
          </h1>
          <h1 style={{ fontWeight: "500" }}>and development</h1>
        </div>
        <div className="showcase-lottie" ref={container}></div>
        <div className="showcase-cta">
          <button className="btn btn-secondary">
            See Portfolio{" "}
            <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </button>
          <button className="btn btn-alternate">
            Contact <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
