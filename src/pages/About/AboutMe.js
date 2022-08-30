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
                    Hello there! My name is Moe. I started learning coding back
                    in 2020 and immediately fell in love with it. I chose early
                    on that I wanted to focus on Web Development with an
                    emphasis on Design. Unable to attend school due to working
                    full time, I dedicated of 2-4 hours a day to learning.{" "}
                  </p>
                </div>
                <div>
                  {" "}
                  After looking into the market a little more deeply, I realized
                  their was a lot of demand for design/brand oriented websites
                  so I leaned WordPress, WebFlow and Figma to boost my design
                  skills. My goal is to establish a career in the web
                  Development field and provide reliable quality websites.
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
                  href={"https://medium.com/@deeramoe"}
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
