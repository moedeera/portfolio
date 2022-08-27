import React from "react";

import "./Homepage.css";
import { Skills } from "../../components/Skills/Skills";
import { Pitch } from "../../components/Pitch/Pitch";
import { Landing } from "../../components/Landing/Landing";
import { Projects } from "../../components/Projects/Projects";

export const Homepage = () => {
  return (
    <div className="container homepage">
      <Landing />
      <Projects page={true} />
      <Pitch />
      <Skills />
    </div>
  );
};
