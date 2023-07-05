import React from "react";
import "./Portfolio.css";
// import MetaTags from "react-meta-tags";

import { Projects } from "../../components/Projects/Projects";
import { Overview } from "../Overview/Overview";

export const PortfolioPage = () => {
  return (
    <div>
      {/* <MetaTags>
        <title>Projects Page</title>
        <meta name="description" content="Projects." />
        <meta property="og:title" content="My Projects" />
        <meta property="og:image" content="path/to/image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="My works" />
      </MetaTags> */}
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
