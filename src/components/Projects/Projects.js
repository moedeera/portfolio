import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { Fade } from "react-reveal";
import { SiteContext } from "../../context/Context";

export const Projects = ({ page }) => {
  const { projects } = useContext(SiteContext);
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
          {projects.map((project) => (
            <>
              <div className="date-unit">
                <p>{project.purpose}</p>
                <h1>
                  <i className={project.brand}></i>
                </h1>
                <h3>{project.header}</h3>
                <div className="course-info">
                  {/* <p>Read more</p> */}
                  <Link to={`./${project.title}`}>
                    <i className="fa fa-arrow-right fa-2x"></i>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </Fade>
  );
};
