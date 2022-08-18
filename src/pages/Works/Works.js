import React from "react";
import "./Works.css";

export const Works = () => {
  return (
    <div className="work-page">
      <div className="main-container">
        <div className="banner-box">
          <div className="bg-display">
            <div className="bg-display-units-container">
              <div className="bg-display-unit" id="bg-1">
                <div className="bgd-overlay"></div>
              </div>
              <div className="bg-display-unit" id="bg-2">
                <div className="bgd-overlay"></div>
              </div>

              <div className="bg-display-unit" id="bg-3">
                <div className="bgd-overlay"></div>
              </div>
            </div>
          </div>

          <div className="banner-text">
            <div className="banner-header">
              <h1>My Works</h1>
            </div>
            <div className="banner-header-cta">
              <button className="btn btn-primary">
                <i className="fa fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
