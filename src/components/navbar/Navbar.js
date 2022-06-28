import React, { useState } from "react";
import { DropDown } from "./dropDown";
import { NavBarModal } from "./NavBarModal";

import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropDownContent, setDropDownContent] = useState("none");
  const [dropDown, showDropDown] = useState(false);

  const changeNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 60) {
      console.log("true");
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        showDropDown(false);
        setDropDownContent("none");
      }}
    >
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <div className="logo">
            <h3>
              {" "}
              Moe
              <span
                style={
                  !navbar
                    ? { color: "var(--primary-color)" }
                    : { color: "gold" }
                }
              >
                Develops
              </span>
            </h3>
          </div>
          <div className="navbar-large">
            <div className="navigation">
              <div className="navigation-link">
                <Link
                  to="/"
                  onClick={() => {
                    setDropDownContent("none");
                    showDropDown(false);
                  }}
                >
                  {" "}
                  <p>Home</p>
                </Link>
              </div>
              <div
                className="navigation-link"
                onClick={() => {
                  if (dropDownContent !== "projects") {
                    setDropDownContent("projects");
                    showDropDown(true);
                  } else {
                    setDropDownContent("none");
                    showDropDown(false);
                  }
                }}
              >
                <p>Projects</p>
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDownContent === "projects"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>

              <div
                className="navigation-link"
                onClick={() => {
                  if (dropDownContent !== "services") {
                    setDropDownContent("services");
                    showDropDown(true);
                  } else {
                    setDropDownContent("none");
                    showDropDown(false);
                  }
                }}
              >
                <p>Services</p>

                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDownContent === "services"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>
              <div
                className="navigation-link"
                onClick={() => {
                  if (dropDownContent !== "about") {
                    setDropDownContent("about");
                    showDropDown(true);
                  } else {
                    setDropDownContent("none");
                    showDropDown(false);
                  }
                }}
              >
                <p>About</p>
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDownContent === "about"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>
              <div></div>
            </div>

            {dropDown && (
              <div
                className={
                  navbar ? "drop-down-content active" : "drop-down-content"
                }
              >
                {" "}
                <DropDown selection={dropDown} />
              </div>
            )}
          </div>
          <div className="navbar-large">
            <button
              className={navbar ? "btn btn-primary active" : "btn btn-primary"}
            >
              Contact
            </button>
          </div>

          <div
            className="navbar-menu-sm"
            onClick={() => {
              showDropDown(true);
            }}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <NavBarModal dropDown={dropDown} showDropDown={showDropDown} />
    </OutsideClickHandler>
  );
};
