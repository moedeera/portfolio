import React, { useRef, useEffect } from "react";
import "./Service.css";
import pic1 from "./Saly-13.png";
import pic2 from "./Saly-12.png";
import pic3 from "./Saly-7.png";
import pic4 from "./apps.png";
import pic5 from "./code.png";
import pic6 from "./sites.png";
import { Link } from "react-router-dom";

import { Fade } from "react-reveal";

export const Services = () => {
  return (
    <div>
      <div className="services-container">
        <div className="upper-services-container">
          <div className="usc-header general-header">Services</div>
          <div className="usc-services">
            <div className="usc-services-unit">
              <div className="usc-icon">
                <img alt="" src={pic6} style={{ width: "50px" }} />
                <p>Websites</p>
              </div>
              <div className="usc-text">
                <h3>Standard Websites</h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
                <a className="service-downward-arrow" href="#standard">
                  <i className="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
            <div className="usc-services-unit">
              <div className="usc-icon">
                {/* <i className="fas fa-rocket"></i> */}
                <img alt="" src={pic4} style={{ width: "40px" }} />
                <p>Apps</p>
              </div>
              <div className="usc-text">
                <h3>Web Applications</h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
                <a className="service-downward-arrow" href="#webapps">
                  <i className="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
            <div className="usc-services-unit">
              <div className="usc-icon">
                <img alt="" src={pic5} style={{ width: "40px" }} />
                <p>Specialized</p>
              </div>
              <div className="usc-text">
                <h3>Custom </h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
                <a className="service-downward-arrow" href="#custom">
                  <i className="fas fa-angle-double-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lower-container">
          <Fade right>
            <section className="about-intro-container" id="services">
              <div className="about-intro sm">
                <div className="about-intro-text">
                  <h3 id="spe">
                    <i class="fa fa-circle"></i>

                    {/* <span style={{ margin: "0 3px" }}>Standard Websites</span> */}

                    <i class="fa fa-circle"></i>
                  </h3>
                  <h1>Standard Websites</h1>
                  <p>
                    A simple static website is a good starting point for anyone
                    needing digital presence for themselves or there business.
                    This can be built in as quick as a day with something like
                    WordPress or 2-3 days if you have a design already in mind.
                    If you are not sure what you want, just send me an email and
                    we can discuss what works for you.
                  </p>

                  <Link to={`../contact`}>
                    <button className="btn btn-about">contact now</button>
                  </Link>
                </div>
                <div className="about-intro-image">
                  <img
                    src={pic1}
                    alt=""
                    style={{ animation: "var(--animation-slow)" }}
                  />
                  <div className="image-circle ic-4"></div>
                </div>
              </div>
            </section>{" "}
          </Fade>
          <Fade left>
            <section className="about-intro-container" id="webapps">
              <div className="about-intro sm2">
                <div className="about-intro-image">
                  <img
                    src={pic2}
                    alt=""
                    style={{ animation: "var(--animation-slow)" }}
                  />
                  <div className="image-circle ic-3"></div>
                </div>

                <div className="about-intro-text">
                  <h3 id="spe">
                    <i class="fa fa-circle"></i>

                    {/* <span style={{ margin: "0 3px" }}>Web applications</span> */}

                    <i class="fa fa-circle"></i>
                  </h3>
                  <h1>Web Applications</h1>
                  <p>
                    A Web App is just a site with more function. This can be as
                    simple as features that enhance user interaction, or as
                    complex as a full e-commerce website with inventory and a
                    payment system.
                  </p>
                  <p>
                    I generally build web Applications with a framework called
                    ReactJS. For data-bases, I use MongoDB, and for payments,
                    Stripe is what I work with. Your application will be hosted
                    on the Heroku platform. All of these services have monthly
                    charges so feel free to look them or contact me if you are
                    not sure how much fees you may pay for your website traffic.
                  </p>

                  <Link to={`../contact`}>
                    <button className="btn btn-about">contact now</button>
                  </Link>
                </div>
              </div>
            </section>{" "}
          </Fade>

          <Fade up>
            <section className="about-intro-container" id="custom">
              <div className="about-intro sm">
                <div className="about-intro-text">
                  <h3 id="spe">
                    <i class="fa fa-circle"></i>

                    {/* <span style={{ margin: "0 3px" }}>Custom</span> */}

                    <i class="fa fa-circle"></i>
                  </h3>
                  <h1>Custom Designs</h1>
                  <p>
                    Not quite sure what you may need? Thats perfectly fine. Send
                    me a message and we can have a discussion about your goals
                    and website requirements.
                  </p>

                  <Link to={`../contact`}>
                    <button className="btn btn-about">contact now</button>
                  </Link>
                </div>
                <div className="about-intro-image">
                  <img src={pic3} alt="" />
                  <div className="image-circle ic-1"></div>
                  <div className="image-circle ic-2"></div>
                </div>
              </div>
            </section>{" "}
          </Fade>
        </div>
      </div>
    </div>
  );
};
