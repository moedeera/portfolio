import React from "react";
import "./Landing.css";
import pic1 from "./Saly-36.png";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-top">
          <div className="landing-header">
            <h1>
              <br />
              Solutions for <br />
              <span className="span-text">Web</span>Development
            </h1>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-upper">
            <div className="landing-bottom-cta">
              <h1>
                10 <i className="fa fa-plus" aria-hidden="true"></i>
              </h1>
              <p>Years of experience</p>
              <div className="buttons-cta">
                <button className="btn btn-landing">Portfolio</button>
                <button className="btn btn-landing">Contact</button>
              </div>
            </div>

            <div className="lb-services">
              <div className="lb-circle">
                <h1>Websites</h1>
                <p>Website building, hosting, and content management</p>
              </div>
              <div className="lb-circle second">
                <h1>Design</h1>
                <p>Amazing Designs, User Friendly interfaces</p>
              </div>
              <div className="lb-circle">
                <h1>Solutions</h1>
                <p>Amazing Designs, User Friendly interfaces</p>
              </div>
            </div>
          </div>
          <div className="landing-bottom-lower">
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-wordpress-simple"></i>
            <i className="fab fa-behance"></i>
          </div>
        </div>
      </div>
      <div className="underlay"></div>
    </div>
  );
};
