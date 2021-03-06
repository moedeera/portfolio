import React from "react";
import "./Card1.css";

export const Card1 = ({ proj1, proj2, proj3, proj4, proj5, proj6 }) => {
  return (
    <div>
      {" "}
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
    </div>
  );
};
