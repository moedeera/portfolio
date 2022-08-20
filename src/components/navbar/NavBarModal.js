import React, { useState } from "react";
import "./NavBarModal.css";
import "./NavBarMobile.css";
import { Link } from "react-router-dom";

export const NavBarModal = ({
  dropDown,
  showDropDown,
  dropDownContent,
  setDropDownContent,
}) => {
  let show = dropDown;
  const [selectShow, setSelectShow] = useState(false);
  const [selectOption, setSelectOption] = useState("portfolio");
  return (
    <div
      className="navbar-modal"
      style={
        show
          ? { transform: "translateX(0)" }
          : { transform: "translateY(-120%)" }
      }
    >
      {/* <div className="navbar-modal-container">
        <div className="navbar-menu">
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/"
            style={{ color: "var(--primary-color)" }}
          >
            <div className="navbar-item">Home</div>
          </Link>

          <div
            className="navbar-item"
            onClick={() => {
              if (dropDownContent !== "portfolio") {
                setDropDownContent("portfolio");
                setSelectShow(true);
                setSelectOption("portfolio");
              } else {
                setDropDownContent("none");
              }
            }}
          >
            Portfolio <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>

          <div
            onClick={() => {
              if (dropDownContent !== "services") {
                setDropDownContent("services");
                setSelectShow(true);
                setSelectOption("services");
              } else {
                setDropDownContent("none");
              }
            }}
            className="navbar-item"
          >
            Services
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>

          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/about"
            style={{ color: "var(--primary-color)" }}
          >
            <div className="navbar-item">About</div>
          </Link>

          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/blog"
            style={{ color: "var(--primary-color)" }}
          >
            <div className="navbar-item">Blog</div>
          </Link>
          <Link
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
            to="/contact"
            style={{ color: "var(--primary-color)" }}
          >
            <div className="navbar-item">Contact</div>
          </Link>
        </div>

        <div
          className={
            selectShow
              ? "navbar-modal-selection nms-active"
              : "navbar-modal-selection"
          }
        >
          <div className="nms-header">
            <i
              onClick={() => {
                setSelectShow(false);
              }}
              className="fa fa-arrow-left fa-2x"
              aria-hidden="true"
            ></i>
            {selectOption === "portfolio" ? (
              <h3> Portfolio</h3>
            ) : (
              <h3> Services</h3>
            )}
          </div>

          {selectOption === "portfolio" ? (
            <div className="portfolio-nms-container">
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="/portfolio/super-donair"
              >
                <div className="pnms-unit">
                  <i className="fas fa-hamburger"></i> Super Donair
                </div>
              </Link>
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="/portfolio/deercoded"
              >
                <div className="pnms-unit">
                  <i className="fas fa-rocket"></i>
                  DeerCoded
                </div>
              </Link>
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="portfolio/librumreader"
              >
                <div className="pnms-unit">
                  <i className="fas fa-fire"></i>
                  Librum Reader
                </div>
              </Link>
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);
                  // setSelectShow(false);
                  show = false;
                }}
                to="portfolio/bluebear"
              >
                <div className="pnms-unit">
                  <i className="fas fa-share-alt-square"></i>
                  BlueBear Social
                </div>
              </Link>
            </div>
          ) : (
            <div className="portfolio-nms-container">
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="/services"
              >
                <div className="pnms-unit">
                  <i className="fas fa-hamburger"></i> Websites
                </div>
              </Link>

              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="/services"
              >
                <div className="pnms-unit">
                  <i className="fas fa-rocket"></i>
                  Web Apps
                </div>
              </Link>
              <Link
                style={{ color: "black" }}
                onClick={() => {
                  showDropDown(false);

                  show = false;
                }}
                to="/services"
              >
                <div className="pnms-unit">
                  <i className="fas fa-fire"></i>
                  Custom
                </div>
              </Link>
            </div>
          )}
        </div>
      </div> */}
      <div className="navbar-mobile">
        <div className="n-m">
          <div className="nm-link" id="nm1"></div>

          <Link
            to={"/"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">Home</div>
          </Link>

          <Link
            to={"/services"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">Services</div>
          </Link>
          <Link
            to={"/portfolio"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">Portfolio</div>
          </Link>
          <Link
            to={"/about"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">About</div>
          </Link>
          <Link
            to={"/contact"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
