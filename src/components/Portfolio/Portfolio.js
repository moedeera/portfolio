import React from "react";
import "./Portfolio.css";
import proj1 from "./pic1.png";
import proj2 from "./pic2.png";
import proj3 from "./pic3.png";
import proj4 from "./pic4.png";
import vid1 from "./vid1.mov";
import vid2 from "./vid2.mov";
import vid3 from "./vid3.mov";
import vid4 from "./vid4.mov";

export const Portfolio = ({ page }) => {
  return (
    <div className="container">
      <div className="portfolio-section-container">
        <div className="projects-header">
          {page === "homepage" && (
            <>
              <h1>Works</h1>
              <h3>
                See All <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </h3>
            </>
          )}
        </div>
        <div className="projects-section-gallery">
          <div className="projects-section-card-new">
            <div className="psc-new-image">
              {" "}
              <video src={vid1} autoplay="true" loop="true">
                {" "}
              </video>
            </div>
            <div className="psc-new-text">
              <h3>Design Theme</h3>
              <h1>DeerCoded</h1>

              <p>Coding Bootcamp </p>
              <div className="read-more-arrow">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="projects-section-card-new">
            <div className="psc-new-image">
              {" "}
              <video src={vid2} autoplay="true" loop="true">
                {" "}
              </video>
            </div>
            <div className="psc-new-text">
              <h3>Client</h3>
              <h1>Super-Donair</h1>

              <p>Local Diner Website</p>
              <div className="read-more-arrow">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="projects-section-card-new">
            <div className="psc-new-image">
              {" "}
              <video src={vid3} autoplay="true" loop="true">
                {" "}
              </video>
            </div>
            <div className="psc-new-text">
              <h3>Client</h3>
              <h1>Librum Reader</h1>

              <p>Upcoming Software Website</p>
              <div className="read-more-arrow">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="projects-section-card-new">
            <div className="psc-new-image">
              {" "}
              <video src={vid4} autoplay="true" loop="true">
                {" "}
              </video>
            </div>
            <div className="psc-new-text">
              <h3>Case Study</h3>
              <h1>Orange Social</h1>

              <p>Social Media Website</p>
              <div className="read-more-arrow">
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
