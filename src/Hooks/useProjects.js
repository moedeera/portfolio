import { useState } from "react";

export const useProjects = () => {
  const [projects, setProject] = useState("null");

  return {
    projects,
    setProject,
  };
};
