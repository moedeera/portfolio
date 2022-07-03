import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-upper">
            <h3>Stay up to date with my latest projects</h3>
            <input placeholder="Enter your email address" type="text" />
            <button className="btn btn-secondary">Sign up</button>
          </div>
        </div>
      </div>

      <div className="footer-lower">
        <div className="footer-lower-label">
          <h3>
            Moe<span style={{ color: "var(--primary-color)" }}>Develops</span>
          </h3>
        </div>

        <ul>
          <li>Websites</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
