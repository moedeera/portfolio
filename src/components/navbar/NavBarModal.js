import React, { useState } from "react";
import "./NavBarModal.css";
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
      <div className="navbar-modal-container">
        <div className="navbar-menu">
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
              <div className="pnms-unit">
                <i className="fas fa-hamburger"></i> Super Donair
              </div>
              <div className="pnms-unit">
                <i className="fas fa-rocket"></i>
                DeerCoded
              </div>
              <div className="pnms-unit">
                <i className="fas fa-fire"></i>
                Librum Reader
              </div>
              <div className="pnms-unit">
                <i className="fas fa-share-alt-square"></i>
                BlueBear Social
              </div>
            </div>
          ) : (
            <div className="portfolio-nms-container">
              <div className="pnms-unit">
                <i className="fas fa-hamburger"></i> Websites
              </div>
              <div className="pnms-unit">
                <i className="fas fa-rocket"></i>
                Web Apps
              </div>
              <div className="pnms-unit">
                <i className="fas fa-fire"></i>
                Custom
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
