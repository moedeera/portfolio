import React from "react";
import "./NavBarModal.css";
import { Link } from "react-router-dom";

export const NavBarModal = ({
  dropDown,
  showDropDown,
  dropDownContent,
  setDropDownContent,
}) => {
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
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/"
          >
            <div className="navbar-item">Home</div>
          </Link>

          <div
            className="navbar-item"
            onClick={() => {
              if (dropDownContent !== "portfolio") {
                setDropDownContent("portfolio");
              } else {
                setDropDownContent("none");
              }
            }}
          >
            Portfolio
          </div>
          {dropDownContent === "portfolio" ? (
            <div className="navbar-sm-selection">Completed</div>
          ) : (
            ""
          )}
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/services"
          >
            <div className="navbar-item">Services</div>
          </Link>
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/about"
          >
            <div className="navbar-item">About</div>
          </Link>
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/contact"
          >
            <div className="navbar-item">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
