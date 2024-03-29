import React, { useState } from "react";
import "./Landing.css";
import pic1 from "./Saly-36.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-top">
          <div className="landing-header">
            <h1>
              Web <br className="header-breaker" />
              <span className="span-text">Development</span>
              <br />
              Solutions
              <br />
            </h1>
          </div>
        </div>

        <div className="landing-bottom">
          <div className="landing-bottom-upper">
            <div className="landing-bottom-cta">
              <div className="btn-container">
                <h2>
                  {" "}
                  Design{" "}
                  <span style={{ fontWeight: "300", color: "goldenrod" }}>
                    |
                  </span>{" "}
                  Code{" "}
                  <span style={{ fontWeight: "300", color: "goldenrod" }}>
                    |
                  </span>{" "}
                  Deploy{" "}
                </h2>
                <button
                  className="btn-hero"
                  onMouseEnter={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                >
                  <a href="#portfolio">
                    <span
                      className="btn-a"
                      style={hover ? { color: "black" } : { color: "white" }}
                    >
                      See Portfolio
                    </span>
                  </a>
                </button>
                <Link to="/contact">
                  <button className="btn-hero btn-contact">Contact</button>
                </Link>
              </div>
              {/* <div className="buttons-cta">
                <button className="btn btn-landing">Portfolio</button>
                <button className="btn btn-landing">Contact</button>
              </div> */}
            </div>

            <div className="lb-services">
              <div className="lb-circle" id="circle-1">
                <h1>Websites</h1>
                <p>Website building, hosting, and content management</p>
              </div>
              <div className="lb-circle second" id="circle-2">
                <h1>Designs</h1>
                <p>Amazing Designs, User Friendly interfaces</p>
              </div>
              <div className="lb-circle" id="circle-3">
                <h1>Solutions</h1>
                <p>Servers set up, e-commerce websites and much more</p>
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
