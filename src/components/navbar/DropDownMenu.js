import React from "react";
import "./DropDownMenu.css";
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
        className="ddm-container"
        onMouseLeave={() => {
          show(false);
          setDropDownContent("none");
          // alert(selection);
        }}
      >
        {" "}
        <div className={status ? "dropdown-menu active" : "dropdown-menu"}>
          {dropDownContent === "portfolio" && (
            <>
              {" "}
              <div className="dropdown-menu-section">
                <h3>Latest Works</h3>
                <div className="dropdown-menu-list">
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/portfolio/DeerCoded"
                  >
                    {" "}
                    <div className="dropdown-menu-list-item">
                      <i className="far fa-file-code"></i>
                      DeerCoded
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/portfolio/Super-donair"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="fas fa-hamburger"></i>
                      Super Donair
                    </div>
                  </Link>

                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/portfolio/orange-social"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="fas fa-share-alt"></i>
                      Social Media App
                    </div>
                  </Link>

                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/portfolio/Librum-reader"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="far fa-bookmark"></i>
                      Liburm-Reader
                    </div>
                  </Link>
                </div>
              </div>
              <div className="dropdown-menu-section xs">
                <h3>Upcoming</h3>
                <div className="dropdown-menu-list ">
                  <div className="dropdown-menu-list-item ">
                    <i className="fas fa-stethoscope"></i>
                    Calgary Radiology
                  </div>
                  {/* <div className="dropdown-menu-list-item">
              <i className="fab fa-wordpress"></i>
              WordPress
            </div>

            <div className="dropdown-menu-list-item">
              <i className="fas fa-blog"></i>
              WebFlow
            </div>

            <div className="dropdown-menu-list-item">
              <i className="fas fa-life-ring"></i>
              Support
            </div> */}
                </div>
              </div>
              <div className="dropdown-menu-section dd-blog">
                <h3>Blog</h3>
                <img
                  src={
                    "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt=""
                />
                <h3>How the Tech recession will impact developers</h3>
                <div className="dd-blog-cta">
                  <Link to="/blog/latest" style={{ color: "white" }}>
                    Read More
                  </Link>
                </div>
              </div>
            </>
          )}

          {dropDownContent === "services" && (
            <>
              {" "}
              <div className="dropdown-menu-section">
                <h3>Websites</h3>
                <div className="dropdown-menu-list">
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/services"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="far fa-window-maximize"></i>
                      Standard
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/services"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="fas fa-cart-plus"></i>
                      Ecommerce
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/services"
                  >
                    {" "}
                    <div className="dropdown-menu-list-item">
                      <i className="fas fa-tablet-alt"></i>
                      Web Apps
                    </div>
                  </Link>
                </div>
              </div>
              <div className="dropdown-menu-section ">
                <h3> Solutions</h3>
                <div className="dropdown-menu-list ">
                  <div className="dropdown-menu-list-item ">
                    <i className="fas fa-sitemap"></i>
                    Hosting
                  </div>
                  <div className="dropdown-menu-list-item ">
                    <i className="fas fa-server"></i>
                    Servers
                  </div>

                  <div className="dropdown-menu-list-item ">
                    <i class="fas fa-tools"></i>
                    Maintenance
                  </div>
                </div>
              </div>
              <div
                className="dropdown-menu-section "
                style={{ borderRight: "none" }}
              >
                <h3>Pages</h3>
                <div className="dropdown-menu-list-item">
                  <i className="fas fa-broom"></i>
                  Fiverr
                </div>
                <div className="dropdown-menu-list-item">
                  <i className="fas fa-broom"></i>
                  Upwork
                </div>
              </div>
            </>
          )}

          {dropDownContent === "about" && (
            <>
              {" "}
              <div className="dropdown-menu-section">
                <h3>General Information</h3>
                <div className="dropdown-menu-list">
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/contact"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="far fa-question-circle"></i>
                      About Myself
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="https://github.com/moedeera"
                  >
                    <div className="dropdown-menu-list-item">
                      <i className="fa fa-github"></i>
                      Github Page
                    </div>
                  </Link>
                  <Link
                    onClick={() => {
                      setDropDownContent("none");
                      show(false);
                    }}
                    to="/blog"
                  >
                    <div className="dropdown-menu-list-item ">
                      <i className="fa fa-wordpress"></i>
                      Blog
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="dropdown-menu-section xs"
                style={{ borderRight: "none" }}
              >
                <h3>Other Links</h3>
                <div className="dropdown-menu-list ">
                  <a href="https://deeracode.ca/">
                    <div className="dropdown-menu-list-item ">
                      <i className="fa fa-wordpress"></i>
                      WordPress page
                    </div>
                  </a>
                  <div className="dropdown-menu-list-item ">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                    Linkedin
                  </div>
                  <div className="dropdown-menu-list-item ">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    Twitter
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
