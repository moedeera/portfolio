import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";

export const Skills = () => {
  return (
    <Fade up>
      <div className="ft-services">
        <h1>Services</h1>

        <div className="services-container">
          <div className="service">
            <i className="fa fa-wordpress" aria-hidden="true"></i>

            <h3>WordPress Websites</h3>
            <p>
              Standard Professional Websites that can be delievered in a quick
              timeframe
            </p>
          </div>

          <div className="service">
            <i class="fas fa-sync sync"></i>
            <h3>WebFlow Websites</h3>
            <p>
              Design Oriented Websites that are geared towards brand imaging and
              more customized UI/UX
            </p>
          </div>

          <div className="service">
            <i className="fab fa-js"></i>

            <h3>JavaScript/React</h3>
            <p>
              Single page websites that are more interactive and easily connect
              with CMS and databases
            </p>
          </div>

          <div className="service">
            <i className="far fa-window-maximize"></i>
            <h3>Fully Custom Websites</h3>
            <p>
              Websites built entirely from scratch to meet the specific demands
              of a client and their business.
            </p>
          </div>
          <div className="service">
            <i className="far fa-comment"></i>

            <h3>Consulting</h3>
            <p>
              Not sure how to build your website? Contact me for a quick zoom
              meeting to get advice on what's best for you
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};
