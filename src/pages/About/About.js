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
              <span style={{ textDecoration: "underline" }}>
                {" "}
                what can you solve'
              </span>
            </h1>
          </div>
        </Fade>
        <Fade right>
          <div className="about-text">
            <h3>
              ? If you look into my Github page you understand that Web
              Development is not just a hobby or a job for me, It's my passion.
            </h3>
            <p>
              {" "}
              My name is Moe and I decided to learn coding in 2020 and
              immediately fell in love with it. I chose early on that I wanted
              to focus on Web Development with an emphasis on web design.
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

        <Fade>
          <div className="about-skills"></div>
        </Fade>
      </div>
    </div>
  );
};
