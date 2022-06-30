import React from "react";
import { Showcase } from "../../components/showcase/showcase";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="container homepage">
      <Showcase />
      <Portfolio />
    </div>
  );
};
