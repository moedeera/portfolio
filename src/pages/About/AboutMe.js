import React from "react";
import "./AboutMe.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader/PageHeader";

export const AboutMe = () => {
  return (
    <Fade>
      <div className="about-me-page">
        <div className="container-abm">
          <div className="upper-header">
            <div className="uh-text">
              <h1>About Me</h1>
            </div>
            <div className="uh-text-line"></div>
          </div>
          <div className="upper-abm">
            <div className="upper-abm-picture-overlay">
              <div className="upper-abm-picture">
                <h1>
                  Web Development is not just a hobby or a job for me, It's an
                  obsession.
                </h1>
              </div>
            </div>
            <div className="upper-abm-text">
              <div className="abm-text-header">
                <h1>
                  Being a developer is about{" "}
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                    }}
                  >
                    <span style={{ color: "black", fontWeight: "600" }}>
                      what you know{" "}
                    </span>
                  </span>
                  <span style={{ textDecoration: "underline" }}>
                    {" "}
                    what you solve
                  </span>
                </h1>
              </div>
              <div className="abm-text-summary">
                <div>
                  <p>
                    {" "}
                    "Hello there! My name is Moe. I started learning coding back
                    in 2020 and immediately fell in love with it. Early on, I
                    decided to focus on web development with an emphasis on
                    design.
                    <br />
                    After conducting thorough market research, I discovered a
                    high demand for design-oriented websites. To enhance my
                    design skills, I delved into WordPress, WebFlow, and Figma.
                  </p>
                </div>
                <div>
                  {" "}
                  After a few months of submitting applications, I secured a
                  contract position with a digital marketing company as a web
                  developer. This opportunity provided me with firsthand
                  experience in using technologies such as React, Shopify,
                  SquareSpace, Adobe Illustrator, and ChatGPT.
                </div>
              </div>
              <div className="abm-icons">
                <a
                  href={"https://github.com/moedeera"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bb342f" }}
                >
                  {" "}
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href={"https://www.linkedin.com/in/moe-deera-ab94a723a/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bb342f" }}
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={"https://medium.com/@mdcoding"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bb342f" }}
                >
                  {" "}
                  <i className="fab fa-medium"></i>
                </a>

                <i className="fa fa-twitter"></i>
              </div>
              <div className="abm-text-cta">
                <Link to={"/contact"}>
                  <button className="btn btn-primary">Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lower-abm"></div>
        </div>
      </div>
    </Fade>
  );
};
