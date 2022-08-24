import React, { useContext, useState } from "react";
import { SiteContext } from "../../context/Context";
import "./SideMenu.css";
import { useLocation } from "react-router-dom";

export const SideMenu = ({ state }) => {
  let location = useLocation();
  const { show, toggleShow } = useContext(SiteContext);

  if (location.pathname !== "/profile") {
    return null;
  }

  return (
    <div className={show ? "SideMenu sm-small-show" : "SideMenu sm-small-hide"}>
      <div className="SideMenu-options">
        <div className="SM-close-button">
          <i
            className="fas fa-times"
            onClick={() => {
              toggleShow(false);
            }}
          ></i>
        </div>
        <div className="SM-Option">
          <div className="SM-avatar">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg"
              alt="avatar-pic"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </div>
          <div className="SM-details">
            <div className="SM-Name">John Smith</div>
            <div className="SM-permission">
              <small>Admin</small>
            </div>
          </div>
        </div>
        <div className="SM-Option">
          <h3>Menu</h3>
          <div className="SM-menu-list">
            <div className="SM-menu-item">Menu item 1</div>
            <div className="SM-menu-item">Menu item 2</div>
            <div className="SM-menu-item">Menu item 3</div>
            <div className="SM-menu-item">Menu item 4</div>
            <div className="SM-menu-item">Menu item 5</div>
          </div>
        </div>
        <div className="SM-Option">
          <h3>Footnotes</h3>
          <div className="SM-footnote">Footnote</div>
          <div className="SM-footnote">Footnote</div>
          <div className="SM-footnote">Footnote</div>
          <div className="SM-footnote">Footnote</div>
        </div>
      </div>
    </div>
  );
};
