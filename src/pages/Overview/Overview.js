import React, { useContext } from "react";
import "./Overview.css";
import { Context } from "react";
import { SiteContext } from "../../context/Context";
import img1 from "./ereader-mockup.png";
import img2 from "./img2.png";
import img3 from "./responsive.png";
import img4 from "./UI-UX.png";
import img5 from "./code.png";
import img6 from "./customizable.png";
import { articles } from "../../assets/data/articles";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import pic1 from "../Project/Group3.png";
import pic2 from "../Project/deercoded-mockup2.png";
import pic3 from "../Project/superdonair-mockup.png";
import pic4 from "../Project/ereader-mockup.png";
import pic5 from "../Project/bluebear-mockup.png";
import pic6 from "../Project/greenframe.png";
import pic7 from "../Project/deeracode-mockup.png";
const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

export const Overview = ({ count }) => {
  const { projects } = useContext(SiteContext);
  return (
    <div className="overview-page" id="projects">
      <div className="main-container">
        <Fade>
          <div
            style={{
              background: `url(${images[projects[0].pic1]})
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
                <img src={pic2} alt="" style={{ maxWidth: "400px" }} />
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
                      background: `url(${images[project.pic1]})
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
                          <img src={images[project.pic1]} alt="" />
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
