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
import { Link } from "react-router-dom";

export const Portfolio = ({ page }) => {
  return (
    <div className="container">
      <div className="portfolio-section-container">
        <div className="projects-header">
          {page === "homepage" && (
            <>
              <h1>Works</h1>

              <Link
                to="/portfolio"
                style={{ color: "var(--primary-color)", cursor: "pointer" }}
              >
                {" "}
                <h3>
                  See All{" "}
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </h3>
              </Link>
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
              <h2>DeerCoded</h2>

              <p>Coding Bootcamp </p>
              <div className="read-more-arrow">
                <p>More Info</p>
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
              <h2>Super-Donair</h2>

              <p>Local Diner Website</p>
              <div className="read-more-arrow">
                <p>More Info</p>
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
              <h2>Librum Reader</h2>

              <p>Upcoming Software Website</p>
              <div className="read-more-arrow">
                <p>More Info</p>
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
              <h2>Orange Social</h2>

              <p>Social Media Website</p>
              <div className="read-more-arrow">
                <p>More Info</p>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
