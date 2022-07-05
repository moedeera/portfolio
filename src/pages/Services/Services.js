import React, { useRef, useEffect } from "react";
import "./Service.css";
import pic1 from "./Saly-13.png";
import pic2 from "./Saly-12.png";
import pic3 from "./Saly-7.png";

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
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="usc-text">
                <h3>Standard Websites</h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
              </div>
            </div>
            <div className="usc-services-unit">
              <div className="usc-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="usc-text">
                <h3>Web Applications</h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
              </div>
            </div>
            <div className="usc-services-unit">
              <div className="usc-icon">
                <i class="fas fa-object-group"></i>
              </div>
              <div className="usc-text">
                <h3>Custom </h3>
                <p>
                  Fully Custom Websites designed to suit your personal and/or
                  business needs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-container">
          <Fade right>
            <section className="about-intro-container">
              <div className="about-intro sm">
                <div className="about-intro-text">
                  <h3 id="spe">
                    <i class="fa fa-circle"></i>

                    {/* <span style={{ margin: "0 3px" }}>Standard Websites</span> */}

                    <i class="fa fa-circle"></i>
                  </h3>
                  <h1>Standard Websites</h1>
                  <p>
                    Librum-Reader is set to launch on August 1st and is
                    currently in the final stages of development. After that
                    stage is done we will start a round of testing to make sure
                    there are'nt any bugs . If the first phase of testing goes
                    well, we will launch a beta version of the application for
                    our users to tryout. In the meanwhile you can keep up to
                    date with us on our social media feeds to see whats new.
                    Below our some of the features we plan to include.
                  </p>

                  <button className="btn btn-about">
                    Follow us
                    <i class="fa fa-facebook"></i>
                  </button>
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
            <section className="about-intro-container">
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
                  <h1>Web Application</h1>
                  <p>
                    Librum-Reader is convenient and easy to use. But ultimately
                    its the custom features and open source nature that will
                    have it stick out. The app is meant to be the go to place
                    for readers and writers alike. The purpose is the give the
                    experience a more interactive feel.
                  </p>
                  <p>
                    Librum-Reader is convenient and easy to use. But ultimately
                    its the custom features and open source nature that will
                    have it stick out. The app is meant to be the go to place
                    for readers and writers alike. The purpose is the give the
                    experience a more interactive feel.
                  </p>

                  <button className="btn btn-about">
                    Learn more
                    <i class="fa fa-chevron-circle-right"></i>
                  </button>
                </div>
              </div>
            </section>{" "}
          </Fade>

          <Fade up>
            <section className="about-intro-container">
              <div className="about-intro sm">
                <div className="about-intro-text">
                  <h3 id="spe">
                    <i class="fa fa-circle"></i>

                    {/* <span style={{ margin: "0 3px" }}>Custom</span> */}

                    <i class="fa fa-circle"></i>
                  </h3>
                  <h1>Custom Designs</h1>
                  <p>
                    Librum-Reader is set to launch on August 1st and is
                    currently in the final stages of development. After that
                    stage is done we will start a round of testing to make sure
                    there are'nt any bugs . If the first phase of testing goes
                    well, we will launch a beta version of the application for
                    our users to tryout. In the meanwhile you can keep up to
                    date with us on our social media feeds to see whats new.
                    Below our some of the features we plan to include.
                  </p>

                  <button className="btn btn-about">
                    Our Twitter
                    <i class="fa fa-twitter"></i>
                  </button>
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
