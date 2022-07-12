import React, { useEffect, useMemo } from "react";
import "./Project.css";
import { useParams } from "react-router-dom";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { useContext } from "react";
import { SiteContext } from "../../context/Context";
import pic1 from "./Group3.png";
import pic2 from "./deercoded-mockup2.png";
import pic3 from "./superdonair-mockup.png";
import pic4 from "./ereader-mockup.png";
import pic5 from "./bluebear-mockup.png";
import pic6 from "./greenframe.png";
import error from "./error.jpeg";

const images = [error, pic2, pic3, pic4, pic5, pic6];

export const Project = () => {
  const { id } = useParams();
  const { getProjectInformation } = useContext(SiteContext);

  const projectData = useMemo(() => {
    return getProjectInformation(id);
  }, [id, getProjectInformation]);

  return (
    <div>
      <div className="project-page-container">
        <PageHeader
          tagline={projectData.orientation}
          header={projectData.header}
        />

        <div className="pp-details">
          <div className="pp-detail-unit">
            <div>
              <h3>Built with</h3>
            </div>
            <div className="pp-icon-list">
              {projectData.icons.map((icon) => (
                <>
                  {icon === "js" && <i className="fab fa-js"></i>}
                  {icon === "css" && <i className="fab fa-css3-alt"></i>}
                  {icon === "html" && <i className="fab fa-html5"></i>}
                  {icon === "react" && <i className="fab fa-react"></i>}
                  {icon === "nodejs" && <i className="fab fa-node-js"></i>}
                  {icon === "wordpress" && (
                    <i className="fab fa-wordpress-simple"></i>
                  )}
                  {icon === "figma" && <i className="fab fa-figma"></i>}
                  {icon === "elementor" && <i className="fab fa-elementor"></i>}
                </>
              ))}
            </div>
          </div>
          <div className="pp-detail-unit">
            <div>
              {" "}
              <h3>Link</h3>
            </div>
            <div>
              <a
                style={{ color: "var(--primary-color)" }}
                href={projectData.link}
              >
                {projectData.header}
              </a>
            </div>
          </div>
          <div className="pp-detail-unit pp-md">
            <div>
              {" "}
              <h3>Purpose</h3>
            </div>
            <div>
              <p>{projectData.purpose}</p>
            </div>
          </div>
          <div className="pp-detail-unit pp-lg">
            <div>
              {" "}
              <h3>Repository</h3>
            </div>
            <div>
              {projectData.repository === "n/a" ? (
                <>N/A</>
              ) : (
                <>
                  {" "}
                  <a
                    href={projectData.repository}
                    style={{ color: "var(--primary-color)" }}
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="pp-detail-unit pp-lg">
            <div>
              {" "}
              <h3>Date </h3>
            </div>
            <div>{projectData.date}</div>
          </div>
        </div>

        <div className="pp-lower">
          <div className="pp-image">
            {" "}
            <img src={images[projectData.pic1]} alt="" />
          </div>
          <div className="pp-summary">
            <div className="pp-summary-header">
              <h3>{projectData.Intro}</h3>
            </div>
            <div className="pp-summary-text">
              {projectData.information.split("\n").map((i, key) => {
                return (
                  <div style={{ marginTop: "10px" }} key={key}>
                    {i}
                  </div>
                );
              })}
              {/* <p>{projectData.information}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
