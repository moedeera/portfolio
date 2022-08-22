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
     
      <div className="navbar-mobile">
        <div className="n-m">
          {/* <div className="nm-link" id="nm1"></div> */}

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
            to={"/blog"}
            onClick={() => {
              showDropDown(false);
              show = false;
            }}
          >
            <div className="nm-link">Blog</div>
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
