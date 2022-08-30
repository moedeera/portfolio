import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";

export const Skills = ({ page }) => {
  return (
    <Fade>
      <div className="ft-services">
        <h1>Services</h1>

        <div className="services-section-container">
          <div className="service">
            <i className="fa fa-wordpress" aria-hidden="true"></i>

            <h3>Design Oriented Websites</h3>
            <p>
              Standard Professional Websites that can be delievered in a quick
              timeframe
            </p>
          </div>

          <div className="service">
            <i className="fab fa-js"></i>

            <h3>Web Application</h3>
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

          {page === "services" && (
            <>
              {" "}
              <div className="service">
                <i className="fab fa-contao"></i>

                <h3>Content Editor</h3>
                <p>
                  I can create, edit, and publish content regarding web design,
                  software development, and current technology trends.
                </p>
              </div>
              <div className="service">
                <i className="fas fa-comment-alt"></i>

                <h3>Consulting</h3>
                <p>
                  Having difficulties maintaining your website? Considering an
                  upgrade? Message me and we can book a consultation.
                </p>
              </div>
              <div className="service">
                <i className="fas fa-envelope"></i>
                <h3>Email development</h3>
                <p>
                  For businesses needing custom promotional emails to send to
                  their subscriber base{" "}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Fade>
  );
};
