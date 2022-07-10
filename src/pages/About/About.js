import React from "react";
import "./About.css";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Fade, Rotate } from "react-reveal";

import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <PageHeader
          tagline={"About me "}
          header={"A Little Bit About Myself"}
        />
        <Fade left>
          <div className="about-header">
            <h1>
              'A Self taught developer that understands it's about{" "}
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
              <span> what can you solve'</span>
            </h1>
          </div>
        </Fade>
        <Fade right>
          <div className="about-text">
            <h3>
              If you look into my Github page you understand that Web
              Development is not just a hobby or a job for me, It's my passion.
            </h3>
            <p>
              {" "}
              My name is Moe and I decided to learn coding in 2020 and
              immediately fell in love with it. I chose early on that I wanted
              to focus on Web Development with an emphasis on web design. Unable
              to attend school due to working full time, I dedicated a minimum
              of 2 hours a day to learning.
              <br />
              <br />
              CSS, HTML and JavaScript were the first skills I learned. I
              followed that up with ReactJS, Express, and MongoDB.
              <br />
              After looking into the market a little more deeply, I realized
              their was a lot of demand for design/brand oriented websites so I
              leaned WordPress, WebFlow and Figma. to boost my design skills. I
              am still learning but have made huge strides since then. My goal
              is to establish a career in the web Development field and provide
              reliable quality websites.
            </p>
          </div>
        </Fade>
        {/* <Fade up>
          <div className="about-images">
            <img
              src={
                "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
          </div>
        </Fade> */}
        <Fade>
          <div className="about-skills">
            {/* <div className="skills-grid">
              <i className="fa fa-wordpress"></i>

              <i className="fab fa-css3-alt"></i>
              <i className="fa fa-html5"></i>
              <i className="fab fa-react"></i>

              <i className="fab fa-js-square"></i>
              <i className="fab fa-node"></i>
              <i className="fab fa-monero"></i>
              <i className="fab fa-weebly"></i>
              <i className="fab fa-figma"></i>
            </div> */}
            {/* <div className="skills-text">
              <h3>Skills</h3>
              <p> I work mainly with the following technologies</p>
              <ul>
                <li>WordPress</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>WebFlow</li>
                <li>Figma</li>
              </ul>
              <div className="about-contact">
                <Link to="/contact">
                  <button className="btn btn-alternate contact-me">
                    Contact
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </Fade>
      </div>
    </div>
  );
};
