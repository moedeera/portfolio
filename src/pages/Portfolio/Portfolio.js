import React from "react";
import "./Portfolio.css";

import { Projects } from "../../components/Projects/Projects";

export const PortfolioPage = () => {
  return (
    <div>
      <div className="portfolio-page-container">
        <h1 style={{ color: "rgb(37, 110, 255)" }}>Portfolio </h1>
        <div>
          <Projects />
        </div>
      </div>
    </div>
  );
};
