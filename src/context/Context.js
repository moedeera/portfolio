import { createContext, useState } from "react";
import { useProjects } from "../Hooks/useProjects";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const { projects, setProject } = useProjects();

  const getProjectInformation = (id) => {
    let projectInfo = null;
    const match = projects.some((project) => project.title === id);

    if (match) {
      projectInfo = projects.find((project) => project.title === id);
    }
    return projectInfo;
  };

  return (
    <SiteContext.Provider
      value={{
        projects,
        setProject,
        getProjectInformation,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
