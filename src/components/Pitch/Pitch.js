import React, { useState } from "react";
import "./Pitch.css";
import pic1 from "./Saly-32.png";
import { Fade } from "react-reveal";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";

export const Pitch = () => {
  const [hover, setHover] = useState("");

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
                <h2>
                  Professional Quality{" "}
                  <span style={{ fontWeight: "300", color: "goldenrod" }}>
                    |
                  </span>{" "}
                  Guaranteed
                </h2>
                <p>
                  Contact me today for a free consultation, Once We finish up
                  the details, a quality website is waiting for you.
                </p>
              </div>
              <div className="upt-cta">
                <Link to="/contact">
                  <button
                    className="btn-pitch"
                    onMouseEnter={() => {
                      setHover("contact");
                    }}
                    onMouseLeave={() => {
                      setHover("none");
                    }}
                    style={
                      hover === "contact"
                        ? { color: "black", backgroundColor: "white" }
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
                        ? { color: "black", backgroundColor: "white" }
                        : { color: "white" }
                    }
                    className="btn-pitch"
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
              <h2>
                {" "}
                Many skills{" "}
                <span style={{ fontWeight: "300", color: "goldenrod" }}>
                  |
                </span>{" "}
                Many Services{" "}
                <span style={{ fontWeight: "300", color: "goldenrod" }}>|</span>{" "}
                One Goal.
              </h2>
              <div className="lp-text">
                <p>
                  While I do have knowledge in many different frameworks and
                  coding languages, I believe it is more important to master
                  each tool and know what is appropriate for any given client.
                </p>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="lp-text">
              <div className="lp-logos">
                <i className="fab fa-react"></i>
                <i className="fab fa-wordpress"></i>
                <i className="fa fa-html5" aria-hidden="true"></i>
                <i className="fab fa-node-js"></i>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
