import React from "react";
import "./Works.css";
import { Overview } from "../Overview/Overview";

export const Works = () => {
  return (
    <div className="work-page">
      <div className="banner-box">
        <div className="banner-text">
          <div className="banner-header">
            <h1>
              <a style={{ color: "purple" }} href="#projects">
                My Works
              </a>
            </h1>
            {/* <h3>
                Here is some of the projects I have recently completed. Take a
                look for yourself
              </h3> */}
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
        {/* <div className="test">
                  <div className="test-unit">
                      <div className="unit-overlay"></div>
          </div>
          <div className="test-unit"></div>
          <div className="test-unit"></div>
        </div> */}

        <div>
          <Overview count={7} />
        </div>
      </div>
    </div>
  );
};
