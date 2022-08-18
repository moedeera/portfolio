import React, { useContext } from "react";
import "./Overview.css";
import { Context } from "react";
import { SiteContext } from "../../context/Context";
import img1 from "./ereader-mockup.png";

export const Overview = () => {
  const { projects } = useContext(SiteContext);
  return (
    <div className="overview-page">
      <div className="main-container">
        <div className="overview-project-showcase">
          <div className="op-showcase sc-main">
            <div className="op-showcase-text">
              <div className="op-header">{projects[0].tagline}</div>
              <div className="op-summary">{projects[0].information}</div>
              <div className="op-cta">
                <i className="fa fa-jsfiddle"></i>
                <i className="fa fa-html5"></i>
                <i className="fa fa-wordpress"></i>
              </div>
            </div>
            <div className="op-showcase-image">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="overview-project-gallery">
          <div className="op-showcase">
            <div className="op-showcase-text">
              <div className="op-header">{projects[0].tagline}</div>
              <div className="op-summary">{projects[0].information}</div>
              <div className="op-cta">
                <i className="fa fa-jsfiddle"></i>
                <i className="fa fa-html5"></i>
                <i className="fa fa-wordpress"></i>
              </div>
            </div>
            <div className="op-showcase-image">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="op-showcase">
            <div className="op-showcase-text">
              <div className="op-header">{projects[0].tagline}</div>
              <div className="op-summary">{projects[0].information}</div>
              <div className="op-cta">
                <i className="fa fa-jsfiddle"></i>
                <i className="fa fa-html5"></i>
                <i className="fa fa-wordpress"></i>
              </div>
            </div>
            <div className="op-showcase-image">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
