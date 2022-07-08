import React from "react";
import "./DropDownMenu.css";
import "./MegaMenu.css";
import superdonair from "./images/superdonair.png";
import bootcamp from "./images/bootcamp.png";
import ereader from "./images/ereader4.png";
import { Link } from "react-router-dom";

export const DropDownMenu = ({
  selection,
  status,
  show,
  setDropDownContent,
  dropDownContent,
}) => {
  return (
    <div className="dropDownMenu-Container">
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
          <div className="megamenu-content">
            <div className="primary-block">
              <div className="primary-block-header">Latest Projects</div>
              <div className="primary-list">
                <div className="primary-list-item">
                  <div className="primary-list-icon">
                    {/* <i className="fa fa-rocket" aria-hidden="true"></i> */}
                    <img
                      src={bootcamp}
                      style={{ width: "100%", maxWidth: "40px" }}
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
                      style={{ width: "100%", maxWidth: "40px" }}
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
                      style={{ width: "100%", maxWidth: "40px" }}
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

            <div className="sub-block">
              {/* <div className="sub-block-header">Industries</div> */}
              <h5>Upcoming</h5>
              <div className="sub-list">
                <div className="sub-list-item">Calgary Radiology SA</div>
                <div className="sub-list-item">AuctionaX</div>
              </div>
            </div>

            <div className="sub-block">
              <h5>Categories</h5>
              <div className="sub-list">
                <div className="sub-list-item">Web Applications</div>
                <div className="sub-list-item">Freelance work</div>
                <div className="sub-list-item">Design Themes</div>
              </div>
            </div>

            <div className="Blog-reminder">
              <h3>Latest Blog</h3>
              <div className="br-lower">
                <div className="blog-image">
                  <img
                    src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div className="blog-text">
                  <p>How the upcoming tech Recession will effect developers.</p>
                  <button className="blog-btn">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
