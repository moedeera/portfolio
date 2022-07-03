import React from "react";
import "./Projects.css";
export const Projects = () => {
  return (
    <section className="dates">
      <div className="date-header">
        <h1>Projects</h1>
      </div>

      <div className="dates-container">
        <div className="date-unit">
          <p>Client</p>
          <h1>
            <i className="fas fa-hamburger fa-2x"></i>
          </h1>
          <h3>Super-donair.com</h3>
          <div className="course-info">
            <p>Read more</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>Design Theme</p>
          <h1>
            <i className="fab fa-js-square fa-2x" style={{ color: "red" }}></i>
          </h1>
          <h3>DeerCoded.com</h3>
          <div className="course-info">
            <p>Read More</p>
            <i className="fa fa-arrow-right fa-2x"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>Client </p>
          <h1>
            <i className="far fa-bookmark fa-2x"></i>
          </h1>
          <h3>Librum-Reader.com</h3>
          <div className="course-info">
            <p>Read more</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>Wep App</p>
          <h1>
            <i className="fab fa-react fa-2x"></i>
          </h1>
          <h3>Bear Social</h3>
          <div className="course-info">
            <p>Read More</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>Case Study</p>
          <h1>
            {" "}
            <i class="fa fa-wordpress fa-2x"></i>
          </h1>
          <h3>GreenframeDesigns.com</h3>
          <div className="course-info">
            <p>Read more</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p></p>
          <h1>#</h1>
          <h3>Next Project will be yours</h3>
          <div className="course-info">
            <p>Contact Now</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
