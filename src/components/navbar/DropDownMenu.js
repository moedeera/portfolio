import React from "react";
import "./DropDownMenu.css";
import { Link } from "react-router-dom";

export const DropDownMenu = ({
  selection,
  status,
  show,
  setDropDownContent,
}) => {
  return (
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
        <div className="dropdown-menu-section">
          <h3>Latest Works</h3>
          <div className="dropdown-menu-list">
            <Link to="/portfolio/orange-social">
              <div className="dropdown-menu-list-item">
                <i className="fab fa-asymmetrik"></i>
                Orange Social
              </div>
            </Link>
            <Link to="/portfolio/super-donair">
              <div className="dropdown-menu-list-item">
                <i className="fas fa-hamburger"></i>
                Super Donair
              </div>
            </Link>
            <Link to="/portfolio/DeerCoded">
              {" "}
              <div className="dropdown-menu-list-item">
                <i className="fas fa-broom"></i>
                DeerCoded
              </div>
            </Link>

            <Link to="/portfolio/librum-reader">
              <div className="dropdown-menu-list-item">
                <i className="fab fa-codiepie"></i>
                Liburm-Reader
              </div>
            </Link>
          </div>
        </div>
        <div className="dropdown-menu-section xs">
          <h3>Upcoming</h3>
          <div className="dropdown-menu-list ">
            <div className="dropdown-menu-list-item ">
              <i className="fas fa-code"></i>
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
      </div>
    </div>
  );
};
