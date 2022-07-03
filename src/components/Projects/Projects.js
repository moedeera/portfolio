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
          <h3>SUPER-DONIAR.com</h3>
          <div className="course-info">
            <p>Read more</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>Design Theme</p>
          <h1>
            <i className="fab fa-js fa-2x"></i>
          </h1>
          <h3>DeerCoded.com</h3>
          <div className="course-info">
            <p>Read More</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
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
          <p>September</p>
          <h1>4</h1>
          <h3>Introduction to Web Development 101</h3>
          <div className="course-info">
            <p>26 Spots lefts</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>September</p>
          <h1>5</h1>
          <h3>Modern Web Design</h3>
          <div className="course-info">
            <p>26 Spots lefts</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div className="date-unit">
          <p>November</p>
          <h1>6</h1>
          <h3>MERN Stack Development</h3>
          <div className="course-info">
            <p>38 Spots lefts</p>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
