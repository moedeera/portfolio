import React from "react";
import { Showcase } from "../../components/showcase/showcase";
import { Portfolio } from "../../components/Portfolio/Portfolio";

import "./Homepage.css";
import { Skills } from "../../components/Skills/Skills";
import { Pitch } from "../../components/Pitch/Pitch";

export const Homepage = () => {
  return (
    <div className="container homepage">
      <Showcase />
      <Portfolio page={"homepage"} />
      <Pitch />
      <Skills />
    </div>
  );
};
