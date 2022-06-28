import React from "react";
import "./NavBarModal.css";

export const NavBarModal = ({ dropDown, showDropDown }) => {
  let show = dropDown;

  return (
    <div
      className="navbar-modal"
      style={
        show
          ? { transform: "translateX(0)" }
          : { transform: "translateX(-100%)" }
      }
    >
      <div className="navbar-modal-container">
        <div className="navbar-menu">
          <div className="navbar-item">
            <i
              className="fa fa-times-circle fa-2x"
              onClick={() => {
                showDropDown(false);
                show = false;
              }}
            ></i>
          </div>
          <div className="navbar-item">Home</div>
          <div className="navbar-item">Portfolio</div>
          <div className="navbar-item">Services</div>
          <div className="navbar-item">About</div>
          <div className="navbar-item">Contact</div>
        </div>
      </div>
    </div>
  );
};
