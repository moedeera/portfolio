import { createContext, useState } from "react";
import { useProjects } from "../Hooks/useProjects";

export const SiteContext = createContext({});

export const SiteContextProvider = ({ children }) => {
  const { projects, setProject } = useProjects();

  return (
    <SiteContext.Provider
      value={{
        projects,
        setProject,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
