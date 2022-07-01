import React from "react";
import "./Portfolio.css";
import { Portfolio } from "../../components/Portfolio/Portfolio";

export const PortfolioPage = () => {
  return (
    <div>
      <div className="portfolio-page-container">
        <h1 style={{ color: "rgb(37, 110, 255)" }}>Portfolio</h1>
        <div>
          <Portfolio />
        </div>
      </div>
    </div>
  );
};
