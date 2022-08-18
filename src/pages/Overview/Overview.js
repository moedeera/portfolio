import React, { useContext } from "react";
import "./Overview.css";
import { Context } from "react";
import { SiteContext } from "../../context/Context";
import img1 from "./ereader-mockup.png";
import { articles } from "../../assets/data/articles";

export const Overview = () => {
  const { projects } = useContext(SiteContext);
  return (
    <div className="overview-page">
      <div className="main-container">
        <div className="overview-project-showcase">
          <div className="op-showcase sc-main">
            <div className="op-showcase-text">
              <div className="op-header">
                <h2>{projects[0].tagline}</h2>
              </div>
              <div className="op-summary">{projects[0].information}</div>
              <div className="op-cta">
                <i className="fab fa-js"></i>
                <i className="fa fa-html5"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fab fa-github"></i>
              </div>
              <div className="op-btn">
                <button className="btn-new">View Project</button>
              </div>
            </div>
            <div className="op-showcase-image">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        <div className="overview-projects-lower">
          <div className="overview-project">
            <div className="ovp-container">
              <div className="ovp-text">
                <h2>Genome Transplant Consort</h2>
                <p>
                  Genome Canada Transplant Consortium is an organization with a
                  mission to improve kidney transplant success rates.
                </p>
                <div className="op-btn">
                  <button className="btn-new">View Project</button>
                </div>
              </div>
              <div className="ovp-image">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

          <div className="overview-project">
            <div className="ovp-container">
              <div className="ovp-text">
                <h2>Genome Transplant Consort</h2>
                <p>
                  Genome Canada Transplant Consortium is an organization with a
                  mission to improve kidney transplant success rates.
                </p>
                <div className="op-btn">
                  <button className="btn-new">View Project</button>
                </div>
              </div>
              <div className="ovp-image">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
