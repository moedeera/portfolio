import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { Fade } from "react-reveal";

export const Projects = ({ page }) => {
  return (
    <Fade right>
      <section className="dates" id="portfolio">
        <div className="date-header">
          {page && (
            <>
              <h1>Portfolio</h1>
              <Link to="/portfolio">
                {" "}
                <h3>See All </h3>
              </Link>
            </>
          )}
        </div>

        <div className="dates-container">
          <div className="date-unit">
            <p>Client</p>
            <h1>
              <i className="fas fa-hamburger fa-2x"></i>
            </h1>
            <h3>Super-donair.com</h3>
            <div className="course-info">
              {/* <p>Read more</p> */}
              <Link to="/portfolio/Super-Donair">
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          <div className="date-unit">
            <p>Design Theme</p>
            <h1>
              <i
                className="fab fa-js-square fa-2x"
                style={{ color: "red" }}
              ></i>
            </h1>
            <h3>DeerCoded.com</h3>
            <div className="course-info">
              {/* <p>Read More</p> */}
              <Link to="/portfolio/DeerCoded">
                <i className="fa fa-arrow-right fa-2x"></i>
              </Link>
            </div>
          </div>

          <div className="date-unit">
            <p>Client </p>
            <h1>
              <i className="far fa-bookmark fa-2x"></i>
            </h1>
            <h3>Librum-Reader.com</h3>
            <div className="course-info">
              {/* <p>Read more</p> */}
              <Link to="/portfolio/Librum-Reader">
                <i className="fa fa-arrow-right fa-2x"></i>
              </Link>
            </div>
          </div>

          <div className="date-unit">
            <p>Wep App</p>
            <h1>
              <i className="fab fa-react fa-2x"></i>
            </h1>
            <h3>Bear Social</h3>
            <div className="course-info">
              {/* <p>Read More</p> */}
              <Link to="/portfolio/Bear-Social">
                <i className="fa fa-arrow-right fa-2x"></i>
              </Link>
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
              {/* <p>Read more</p> */}
              <Link to="/portfolio/GreenFrame">
                <i className="fa fa-arrow-right fa-2x"></i>
              </Link>
            </div>
          </div>

          <div className="date-unit">
            <p></p>
            <h1>#</h1>
            <h3>Next Project will be yours</h3>
            <div className="course-info">
              {/* <p>Contact Now</p> */}
              <Link to="/contact">
                <i className="fa fa-arrow-right fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};
