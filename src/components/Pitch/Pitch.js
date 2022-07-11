import React, { useState } from "react";
import "./Pitch.css";
import pic1 from "./Saly-32.png";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

export const Pitch = () => {
  const [hover, setHover] = useState("none");

  return (
    <div className="pitch">
      <div className="pitch-container">
        <div className="pitch-header">
          <div className="pitch-circle">What</div>
          <h1>Is offered?</h1>
        </div>
        <div className="upper-pitch">
          <Fade left>
            <div className="up-text-section">
              <div>
                <h1>Professional Quality Guaranteed</h1>
                <p>
                  Contact me today for a free consultation, Once We finish up
                  the details, a quality website is waiting for you.
                </p>
              </div>
              <div className="upt-cta">
                <Link to="/contact">
                  <button
                    className="btn btn-secondary"
                    onMouseEnter={() => {
                      setHover("contact");
                    }}
                    onMouseLeave={() => {
                      setHover("none");
                    }}
                    style={
                      hover === "contact"
                        ? { color: "var(--alternate-color)" }
                        : { color: "white" }
                    }
                  >
                    {" "}
                    Contact
                  </button>
                </Link>
                <Link to="/services">
                  <button
                    onMouseEnter={() => {
                      setHover("read-more");
                    }}
                    onMouseLeave={() => {
                      setHover("none");
                    }}
                    style={
                      hover === "read-more"
                        ? { color: "var(--alternate-color)" }
                        : { color: "white" }
                    }
                    className="btn btn-secondary"
                  >
                    {" "}
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
          <Zoom>
            <div className="up-image-section">
              <img src={pic1} alt="" style={{ width: "300px" }} />
            </div>
          </Zoom>
        </div>
        <div className="lower-pitch">
          <Fade left>
            <div className="lp-tagline">
              <h1> Many skills, Many Services, One Goal.</h1>
            </div>
          </Fade>
          <Fade right>
            <div className="lp-text">
              <p>
                While I do have knowledge in many different frameworks and
                coding languages, I believe it is more important to master each
                tool and know what is appropriate for any given client.
              </p>
            </div>
          </Fade>
          <Fade up>
            <div className="lp-logos">
              <i className="fa fa-jsfiddle"></i>
              <i className="fa fa-github"></i>
              <i className="fa fa-html5" aria-hidden="true"></i>
              <i className="fa fa-joomla" aria-hidden="true"></i>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
