import React from "react";
import "./Pitch.css";
import pic1 from "./Saly-32.png";

export const Pitch = () => {
  return (
    <div className="pitch-container">
      <div className="upper-pitch">
        <div className="up-text-section">
          <h3>Professional Quality Guaranteed</h3>
          <p>
            Contact me to day or visit my page on Github for a free
            consultation, Once We finish up the details a quality website is
            waiting for you.
          </p>
          <div className="upt-cta">
            <button> Contact</button>
          </div>
        </div>
        <div className="up-image-section">
          <img src={pic1} alt="" style={{ width: "300px" }} />
        </div>
      </div>
      <div className="lower-pitch">
        <div className="lp-tagline">Many skills and services, One Mission</div>
        <div className="lp-text">
          While I do have knowledge in many different frameworks and coding
          languages, I believe it is more important to master each tool and know
          what is appropriate for any given client.
        </div>
        <div className="lp-logos">
          <i className="fa fa-jsfiddle"></i>
          <i className="fa fa-github"></i>
          <i className="fa fa-html5" aria-hidden="true"></i>
          <i className="fa fa-joomla" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
