import React from "react";
import "./DropDownMenu.css";

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
          <h3>Latest Projects</h3>
          <div className="dropdown-menu-list">
            <div className="dropdown-menu-list-item">
              <i class="fab fa-asymmetrik"></i>
              Orange Social
            </div>
            <div className="dropdown-menu-list-item">
              <i className="fas fa-hamburger"></i>
              Super Donair
            </div>

            <div className="dropdown-menu-list-item">
              <i className="fas fa-broom"></i>
              Super Donair
            </div>

            <div className="dropdown-menu-list-item">
              <i className="fab fa-codiepie"></i>
              Super Donair
            </div>
          </div>
        </div>
        <div className="dropdown-menu-section">
          <h3>Areas </h3>
          <div className="dropdown-menu-list">
            <div className="dropdown-menu-list-item">
              <i className="fas fa-code"></i>
              Custom Sites
            </div>
            <div className="dropdown-menu-list-item">
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
            </div>
          </div>
        </div>

        <div className="dropdown-menu-section dd-blog">
          <h3> Blog</h3>
        </div>
      </div>
    </div>
  );
};
