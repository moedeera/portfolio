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
              {/* <h1 className="lb-sw">See Works</h1>

              <div className="button-cta">
                <a
                  className="btn btn-alt"
                  href="#portfolio"
                  style={{
                    color: "var(--dark)",
                    backgroundColor: "white",
                  }}
                >
                  <i class="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                </a>
              </div> */}
              <div className="btn-container">
                <h2> A Developer that loves Design</h2>
                <button className="btn-hero">See Portfolio</button>
                <button className="btn-hero btn-contact">Contact</button>
              </div>
              {/* <div className="buttons-cta">
                <button className="btn btn-landing">Portfolio</button>
                <button className="btn btn-landing">Contact</button>
              </div> */}
            </div>

            <div className="lb-services">
              <div className="lb-circle">
                <h1>Websites</h1>
                <p>Website building, hosting, and content management</p>
              </div>
              <div className="lb-circle second">
                <h1>Designs</h1>
                <p>Amazing Designs, User Friendly interfaces</p>
              </div>
              <div className="lb-circle">
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
