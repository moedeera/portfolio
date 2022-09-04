import React, { useContext } from "react";
import "./Overview.css";

import { SiteContext } from "../../context/Context";

import img3 from "./responsive.png";

import img6 from "./customizable.png";

import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { portfolioImages } from "../../assets/data/images/index.js";

export const Overview = ({ count }) => {
  const { projects } = useContext(SiteContext);
  return (
    <div className="overview-page" id="projects">
      <div className="main-container">
        <Fade>
          <div
            style={{
              background: `url(${portfolioImages[projects[0].pics[0]]})
          center
          
            `,
            }}
            className="overview-project-showcase"
          >
            <div className="op-showcase sc-main">
              <div className="op-showcase-text">
                <div className="op-header">
                  <h2>{projects[0].tagline}</h2>
                </div>
                <div className="op-summary">{projects[0].information}</div>
                <div className="op-cta">
                  <div className="op-cta-text">
                    {/* <img src={img4} alt="" /> */}
                    <i className="fa fa-check"></i>
                    Friendly UI
                  </div>
                  <div className="op-cta-text">
                    <img src={img3} alt="" />
                    Responsive
                  </div>
                  <div className="op-cta-text">
                    <img src={img6} alt="" />
                    Customizable
                  </div>
                  {/* <div className="op-cta-text">
                  <i className="fab fa-github"></i>
                </div> */}
                </div>
                <div className="op-btn">
                  <Link to={`../portfolio/${projects[0].title}`}>
                    <button className="btn-new">View Project</button>
                  </Link>
                </div>
              </div>
              <div className="op-showcase-image">
                <img
                  src={portfolioImages[projects[0].pics[0]]}
                  alt=""
                  style={{ maxWidth: "400px" }}
                />
              </div>
            </div>
          </div>
        </Fade>

        <div className="overview-projects-lower">
          {projects.map(
            (project, key) =>
              count + 1 > key &&
              key > 0 && (
                <>
                  <div
                    className="overview-project"
                    style={{
                      background: `url(${portfolioImages[project.pics[0]]})
                    center
                    
                      `,
                    }}
                  >
                    <div className="ovp-container">
                      <div className="ovp-text">
                        <h2>{project.tagline}</h2>
                        <p>{project.Intro}</p>
                        <div className="op-btn">
                          <Link to={`../portfolio/${project.title}`}>
                            <button className="btn-new">View Project</button>
                          </Link>
                        </div>
                      </div>
                      <Fade right>
                        <div className="ovp-image">
                          <img src={portfolioImages[project.pics[0]]} alt="" />
                        </div>
                      </Fade>
                    </div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};
