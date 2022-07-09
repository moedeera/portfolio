import React from "react";
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

export const DropDownMenu = ({
  selection,
  status,
  show,
  setDropDownContent,
  dropDownContent,
}) => {
  return (
    <div
      className="dropDownMenu-Container"
      style={
        dropDownContent === "about"
          ? { width: "0%", right: "0" }
          : { width: "100%" }
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
                  <div className="primary-list-item">
                    <div className="primary-list-icon">
                      {/* <i className="fa fa-rocket" aria-hidden="true"></i> */}
                      <img
                        src={bootcamp}
                        style={{ width: "100%", maxWidth: "30px" }}
                        alt=""
                      />
                    </div>
                    <div className="primary-list-text">
                      <h5>DeerCoded.com</h5>
                      <small>Coding bootcamp theme</small>
                    </div>
                  </div>

                  <div className="primary-list-item">
                    <div className="primary-list-icon">
                      <img
                        src={superdonair}
                        style={{ width: "100%", maxWidth: "30px" }}
                        alt=""
                      />
                    </div>
                    <div className="primary-list-text">
                      <h5>Super-Donair.com</h5>
                      <small>Website for local Diner</small>
                    </div>
                  </div>

                  <div className="primary-list-item">
                    <div className="primary-list-icon">
                      <img
                        src={ereader}
                        style={{ width: "100%", maxWidth: "30px" }}
                        alt=""
                      />
                    </div>
                    <div className="primary-list-text">
                      <h5>Librum Reader</h5>
                      <small>Software launch website</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sub-block">
                <h5>Completed</h5>
                <div className="sub-list">
                  <div className="sub-list-item">BlueBear Social</div>
                  <div className="sub-list-item">DeerCoded.com</div>
                  <div className="sub-list-item">Super-Donair.com</div>
                  <div className="sub-list-item">Librum Reader</div>
                  <div className="sub-list-item">Greenframe designs</div>
                </div>
              </div>

              <div className="sub-block sb-md">
                {/* <div className="sub-block-header">Industries</div> */}
                <h5>Upcoming</h5>
                <div className="sub-list">
                  <div className="sub-list-item">Calgary Radiology SA</div>
                  <div className="sub-list-item">AuctionaX</div>
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

              <div className="Blog-reminder sb-xl">
                <h3>Latest Blog</h3>
                <div className="br-lower">
                  <div className="blog-image">
                    <img
                      src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className="blog-text">
                    <p>
                      How the upcoming tech Recession will effect developers.
                    </p>
                    <button className="blog-btn">More</button>
                  </div>
                </div>
              </div>
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
                    Design Templates, Mockups and Drafts for websites
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
                    Design Templates, Mockups and Drafts for websites
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
                    Design Templates, Mockups and Drafts for websites
                  </div>
                </div>
              </div>
              <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={consult} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">Consulting</div>
                  <div className="mmsu-text-summary">
                    Design Templates, Mockups and Drafts for websites
                  </div>
                </div>
              </div>
              {/* <div className="mm-service-unit">
                <div className="mmsu-image">
                  <img src={ereader} alt=""></img>
                </div>
                <div className="mmsu-text">
                  <div className="mmsu-text-header">UI/UX Design</div>
                  <div className="mmsu-text-summary">
                    Design Templates, Mockups and Drafts for websites
                  </div>
                </div>
              </div> */}
            </div>
          )}
          {/* {dropDownContent === "about" && (
            <div className="megamenu-about" id="about">
              <div className="mm-about-unit">
                <div className="mmau-image">
                  <img src={design} alt=""></img>
                </div>
                <div className="mmau-text">
                  <div className="mmau-text-header">General Info</div>
                  <div className="mmau-text-summary">
                    <div className="mmau-link"> About Me</div>
                    <div className="mmau-link">Github</div>
                    <div className="mmau-link">Linkedin</div>
                    <div className="mmau-link">Twiiter</div>
                  </div>
                </div>
              </div>
              <div className="mm-about-unit">
                <div className="mmau-image">
                  <img src={webapps} alt=""></img>
                </div>
                <div className="mmau-text">
                  <div className="mmau-text-header">Skills</div>
                  <div className="mmau-text-summary">
                    <div className="mmau-link"> WordPress</div>

                    <div className="mmau-link"> CSS</div>
                    <div className="mmau-link">HTML</div>
                    <div className="mmau-link">JavaScript</div>
                    <div className="mmau-link">ReactJS</div>
                    <div className="mmau-link">ExpressJS</div>
                    <div className="mmau-link">Heroku</div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};
