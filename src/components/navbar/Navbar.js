import React, { useState } from "react";
import { DropDown } from "./dropDown";
import OutsideClickHandler from "react-outside-click-handler";
import "./Navbar.css";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropDownContent, showDropDownContent] = useState(false);
  const [dropDown, setDropDown] = useState("none");

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
        setDropDown("none");
        showDropDownContent(false);
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
                <p>Home</p>
              </div>
              <div
                className="navigation-link"
                onClick={() => {
                  setDropDown("projects");
                  showDropDownContent(true);
                }}
              >
                <p>Projects</p>
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDown === "projects"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>

              <div
                className="navigation-link"
                onClick={() => {
                  setDropDown("services");
                  showDropDownContent(true);
                }}
              >
                <p>Services</p>

                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDown === "services"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>
              <div
                className="navigation-link"
                onClick={() => {
                  setDropDown("about");
                  showDropDownContent(true);
                }}
              >
                <p>About</p>
                <i
                  className="fa fa-chevron-down"
                  aria-hidden="true"
                  style={
                    dropDown === "about"
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                ></i>
              </div>
              <div></div>
            </div>

            {dropDownContent && (
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

          <div className="navbar-menu-sm">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
