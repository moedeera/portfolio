import React from "react";
import "./Portfolio.css";
import proj1 from "./pic1.png";
import proj2 from "./pic2.png";
import proj3 from "./pic3.png";
import proj4 from "./pic4.png";

export const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio-section-container">
        <div className="projects-header">
          <h1>Works</h1>
          <p>This includes everything from paid projects to case studies</p>
        </div>
        <div className="projects-section-gallery">
          <div className="projects-section-card" id="proj-1">
            <div className="card-info">
              <div className="card-image">
                <img src={proj1} alt="" style={{ width: "200px" }} />
              </div>
              <div className="card-text">
                <h5>Bootcamp Website</h5>
                <h1>DeerCoded</h1>
                <p>A website designed for a fictional bootcamp</p>
              </div>
            </div>
            <div className="card-cta">See More</div>
          </div>
          <div className="projects-section-card" id="proj-2">
            <div className="card-info">
              <div className="card-image">
                <img src={proj2} alt="" style={{ marginBottom: "50px" }} />
              </div>
              <div className="card-text">
                <h5>local Diner</h5>
                <h1>Super-Donair</h1>
                <p>A website designed for a local business</p>
              </div>
            </div>
            <div className="card-cta">See More</div>
          </div>
          <div className="projects-section-card" id="proj-3">
            <div className="card-info">
              <div className="card-image">
                <img src={proj3} alt="" style={{ marginBottom: "50px" }} />
              </div>
              <div className="card-text">
                <h5>local Diner</h5>
                <h1>Librum Reader</h1>
                <p>A website designed for a local business</p>
              </div>
            </div>
            <div className="card-cta">See More</div>
          </div>
          <div className="projects-section-card" id="proj-4">
            <div className="card-info">
              <div className="card-image">
                <img src={proj4} alt="" style={{ marginBottom: "50px" }} />
              </div>
              <div className="card-text">
                <h5>MERN app</h5>
                <h1>Orange Social</h1>
                <p>A full stack social media website</p>
              </div>
            </div>
            <div className="card-cta">See More</div>
          </div>

          {/* <div className="projects-section-card">
            <div className="card-image"></div>
            <div className="card-cta">See More</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
