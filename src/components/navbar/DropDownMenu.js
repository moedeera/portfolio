import React, { useContext } from "react";
import "./DropDownMenu.css";
import "./MegaMenu.css";
import "./MegaMenuServices.css";
import "./MegaMenuAbout.css";
import superdonair from "./images/superdonair.png";
import bootcamp from "./images/bootcamp.png";
import ereader from "./images/ereader4.png";
import webapps from "./images/react.png";
import wordpress from "./images/wordpress.png";
import design from "./images/design.png";
import business from "./images/business.png";
import consult from "./images/chat.png";
import { Link } from "react-router-dom";
import { blogImages } from "../../assets/data/images/index.js";
import { SiteContext } from "../../context/Context";

const images = [null, bootcamp, superdonair, ereader];

export const DropDownMenu = ({
  selection,
  status,
  show,
  setDropDownContent,
  dropDownContent,
  active,
}) => {
  const { projects, articlesList } = useContext(SiteContext);

  return (
    <div
      className={
        active ? "dropDownMenu-Container active" : "dropDownMenu-Container"
      }
    >
      <div
        onMouseLeave={() => {
          show(false);
          setDropDownContent("none");
          // alert(selection);
        }}
        className="ddm-container"
      >
        <div
          className={
            status ? "dropdown-menu dd-mm active" : "dropdown-menu dd-mm"
          }
        >
          {dropDownContent === "portfolio" && (
            <div className="megamenu-content" id="portfolio">
              <div className="primary-block">
                <div className="primary-block-header">Latest Projects</div>

                <div className="primary-list">
                  {projects.map(
                    (project, i) =>
                      project.recent && (
                        <Link
                          to={`../portfolio/${project.title}`}
                          onClick={() => {
                            show(false);
                            setDropDownContent("none");
                          }}
                        >
                          <div className="primary-list-item">
                            <div className="primary-list-icon">
                              {/* <i className="fa fa-rocket" aria-hidden="true"></i> */}
                              <img
                                src={images[project.id]}
                                style={{ width: "100%", maxWidth: "30px" }}
                                alt=""
                              />
                            </div>

                            <div className="primary-list-text">
                              <h5>{project.header}</h5>
                              <small>{project.tagline}</small>
                            </div>
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </div>

              <div className="sub-block">
                <h5>Completed</h5>
                <div className="sub-list">
                  {projects.map(
                    (project) =>
                      project.completed && (
                        <Link
                          to={`../portfolio/${project.title}`}
                          onClick={() => {
                            show(false);
                            setDropDownContent("none");
                          }}
                        >
                          <div className="sub-list-item">{project.header}</div>
                        </Link>
                      )
                  )}
                </div>
              </div>

              <div className="sub-block sb-md">
                {/* <div className="sub-block-header">Industries</div> */}
                <h5>Upcoming</h5>
                <div className="sub-list">
                  <Link
                    to="/portfolio/calgaryradiology"
                    onClick={() => {
                      show(false);
                      setDropDownContent("none");
                    }}
                  >
                    <div className="sub-list-item">Calgary Radiology SA</div>
                  </Link>
                  <Link
                    to="/portfolio/auctionax"
                    onClick={() => {
                      show(false);
                      setDropDownContent("none");
                    }}
                  >
                    <div className="sub-list-item">AuctionaX</div>
                  </Link>
                </div>
              </div>

              <div className="sub-block sb-lg">
                <h5>Categories</h5>
                <div className="sub-list">
                  <div className="sub-list-item">Web Applications</div>
                  <div className="sub-list-item">Freelance work</div>
                  <div className="sub-list-item">Design Themes</div>
                </div>
              </div>

              <Link to="/blog/latest">
                <div className="Blog-reminder sb-xl">
                  <h3>Latest Blog</h3>
                  <div className="br-lower">
                    <div className="blog-image">
                      <img src={blogImages[0].article} alt="" />
                    </div>
                    <div className="blog-text">
                      <p>{articlesList[0].header}</p>
                      <button className="blog-btn">More</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
          {dropDownContent === "services" && (
            <div className="megamenu-services" id="services">
              <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={design} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">UI/UX Design</div>
                  <div className="mmsu-text-summary">
                    Design Templates, Mockups and Drafts for websites
                  </div>
                </div>
              </div>
              <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={webapps} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">Web Applications</div>
                  <div className="mmsu-text-summary">
                    React Web Apps for websites that require more features for
                    user interaction
                  </div>
                </div>
              </div>
              <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={business} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">Business Websites</div>
                  <div className="mmsu-text-summary">
                    Websites that require bookings, payments, content, and
                    inventory management.
                  </div>
                </div>
              </div>
              <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={wordpress} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">WordPress sites</div>
                  <div className="mmsu-text-summary">
                    Timely, Professional looking sites that are easy to manage
                    and customize.
                  </div>
                </div>
              </div>

              <Link
                onClick={() => {
                  show(false);
                  setDropDownContent("none");
                }}
                to={"/contact"}
              >
                <div className="mm-service-unit">
                  <div className="mmsu-image">
                    <img src={consult} alt=""></img>
                  </div>
                  <div className="mmsu-text">
                    <div
                      className="mmsu-text-header"
                      style={{ color: "black" }}
                    >
                      Consulting
                    </div>
                    <div
                      className="mmsu-text-summary"
                      style={{ color: "var(--text-secondary" }}
                    >
                      Not sure what you need? Interested in recruiting me for
                      your organization? Send me a message and I will get back
                      to you as soon as possible.
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                onClick={() => {
                  show(false);
                  setDropDownContent("none");
                }}
                to={"/services"}
              >
                <div
                  className="mm-service-unit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="mmsu-image">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </div>
                  <div className="mmsu-text">
                    <div className="mmsu-text-header">See all</div>
                    <div className="mmsu-text-summary"></div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
