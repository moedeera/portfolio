import React from "react";
import "./Works.css";
import pic from "./image00.jpg";
import { Overview } from "../Overview/Overview";

export const Works = () => {
  return (
    <div className="work-page">
      <div style={{ backgroundImage: `url(${pic})` }} className="banner-box">
        <div className="banner-text">
          <div className="banner-header">
            <h1>
              <a style={{ color: "purple" }} href="#projects">
                My Works
              </a>
            </h1>
          </div>
          <div className="banner-header-cta">
            <a style={{ color: "purple" }} href="#projects">
              <button
                className="btn btn-primary"
                style={{ margin: "10px 0 0" }}
              >
                <i className="fa fa-chevron-down"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div>
          <Overview count={7} />
        </div>
      </div>
    </div>
  );
};
