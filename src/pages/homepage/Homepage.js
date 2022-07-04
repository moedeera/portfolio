import React from "react";

import "./Homepage.css";
import { Skills } from "../../components/Skills/Skills";
import { Pitch } from "../../components/Pitch/Pitch";
import { Landing } from "../../components/Landing/Landing";
import { Projects } from "../../components/Projects/Projects";
import { useRef } from "react";

export const Homepage = () => {
  const portfolio = useRef(null);
  return (
    <div className="container homepage">
      <Landing />
      <Projects ref={portfolio} />
      <Pitch />
      <Skills />
    </div>
  );
};
