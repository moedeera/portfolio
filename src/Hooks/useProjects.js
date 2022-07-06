import { useState } from "react";
import { projectsList } from "../assets/data/projects";

export const useProjects = () => {
  const [projects, setProject] = useState(projectsList);

  return {
    projects,
    setProject,
  };
};
