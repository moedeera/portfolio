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

export const Portfolio = () => {
  return (
    <div className="container">
      <div className="portfolio-section-container">
        <div className="projects-header">
          <h1>Works</h1>
          <p>This includes everything from paid projects to case studies</p>
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
              <h3>DeerCoded.com</h3>
              <div className="card-details">
                <div>
                  <i className="fa fa-calendar" aria-hidden="true"></i> April
                  2020
                </div>
                <div>
                  {" "}
                  <i class="fa fa-folder" aria-hidden="true"></i> See Github
                </div>
              </div>
              <p>
                A website designed for a fictional bootcamp. A website designed
                for a fictional bootcamp
              </p>
              <button className="btn btn-primary">Read More</button>
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
              <h3>Super-Donair.com</h3>
              <div className="card-details">
                <div>
                  <i className="fa fa-calendar" aria-hidden="true"></i> April
                  2020
                </div>
                <div>
                  {" "}
                  <i class="fa fa-folder" aria-hidden="true"></i> See Github
                </div>
              </div>
              <p>
                A website designed for a fictional bootcamp. A website designed
                for a fictional bootcamp
              </p>
              <button className="btn btn-primary">Read More</button>
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
              <h3>Librum Reader</h3>
              <div className="card-details">
                <div>
                  <i className="fa fa-calendar" aria-hidden="true"></i> April
                  2020
                </div>
                <div>
                  {" "}
                  <i class="fa fa-folder" aria-hidden="true"></i> See Github
                </div>
              </div>
              <p>
                A website designed for a fictional bootcamp. A website designed
                for a fictional bootcamp
              </p>
              <button className="btn btn-primary">Read More</button>
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
              <h3>Social Media Website</h3>
              <div className="card-details">
                <div>
                  <i className="fa fa-calendar" aria-hidden="true"></i> April
                  2020
                </div>
                <div>
                  {" "}
                  <i class="fa fa-folder" aria-hidden="true"></i> See Github
                </div>
              </div>
              <p>
                A website designed for a fictional bootcamp. A website designed
                for a fictional bootcamp
              </p>
              <button className="btn btn-primary btn-card">
                Read More <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
