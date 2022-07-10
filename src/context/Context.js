import { createContext, useState } from "react";
import { useProjects } from "../Hooks/useProjects";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const { projects, setProject } = useProjects();

  const getProjectInformation = (id) => {
    let projectInfo = null;
    const match = projects.some((project) => project.title === id);
    console.log(match);
    if (match) {
      projectInfo = projects.find((project) => project.title === id);
      console.log(projectInfo);
      return projectInfo;
    }
    return {
      id: 0,
      orientation: "error",
      title: "error",
      icons: [],
      pic1: 0,
      pic2: "",
      pic3: "",
      purpose: "n/a",
      repository: "n/a",
      link: "n/a",
      header: "Missing Project",
      Intro: "Nothing to show",
      information:
        "This project is either no longer listed or has  yet to be posted",
      date: "n/a",
    };
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
