import React from "react";
import "./Portfolio.css";

import { Projects } from "../../components/Projects/Projects";
import { Overview } from "../Overview/Overview";

export const PortfolioPage = () => {
  return (
    <div>
      <div className="portfolio-page-container">
        <h1 style={{ color: "rgb(37, 110, 255)" }}>Portfolio </h1>
        <div>
          {/* <Projects /> */}
          <Overview />
        </div>
      </div>
    </div>
  );
};
