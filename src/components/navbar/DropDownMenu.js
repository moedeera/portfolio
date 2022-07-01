import React from "react";
import "./DropDownMenu.css";

export const DropDownMenu = ({ selection }) => {
  return (
    <div className="ddm-container">
      {" "}
      <div className="dropdown-menu">
        <div className="dropdown-menu-section ">
          <h3>Completed</h3>
          <div className="menu-list">
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              Bear Social
            </div>
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              DeerCoded
            </div>
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              SuperDonair
            </div>
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              E-Reader
            </div>
          </div>
        </div>
        <div className="dropdown-menu-section xs">
          <h3>Upcoming</h3>
          <div className="menu-list">
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              AuctionaX
            </div>
            <div className="dd-menu-item">
              <i className="fab fa-react"></i>
              DeerCoded
            </div>
          </div>
        </div>
        <div className="dropdown-menu-section dd-blog">
          <div className="dropdown-blog">
            <h3>Recent article</h3>{" "}
            <div className="dropdown-blog-image">
              {" "}
              <img
                src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="hello"
              />
            </div>
            <h3>Upcoming Tech Recession</h3>
            <p>
              Sept 8th <span style={{ color: "crimson" }}>Read more</span>
            </p>
          </div>
        </div>
      </div>
      u
    </div>
  );
};
