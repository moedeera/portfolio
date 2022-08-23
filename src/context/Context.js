import { createContext, useState } from "react";
import { useProjects } from "../Hooks/useProjects";
import { useArticles } from "../Hooks/useArticles";
import { useEffect } from "react";

export const SiteContext = createContext({});

const LoadUser = async () => {
  if (localStorage.getItem("token")) {
    let User = JSON.parse(localStorage.getItem("token"));
    return User;
  } else return { logged: false, user: null };
};

export const SiteContextProvider = ({ children }) => {
  const { projects, setProject } = useProjects();

  const { articlesList, setArticles } = useArticles();

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

  const getArticle = (id) => {
    let article = null;

    console.log(id, articlesList[1].title);
    const match = articlesList.some((post) => post.title === id);
    console.log(match);
    if (match) {
      article = articlesList.find((post) => post.title === id);
      console.log(article);
      return article;
    }

    if (id === "latest") {
      article = articlesList[0];
      return article;
    }
    return {
      id: null,

      title: "error",
      icons: [],
      pic1: "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      pic2: "",
      pic3: "",
      topic: "",
      link: "",
      header: "",
      abstract: "",
      date: "",
      summary: "",
    };
  };

  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const newUser = await LoadUser();
      setUser(newUser);
    };

    getUser().catch(console.error);
  }, []);

  return (
    <SiteContext.Provider
      value={{
        projects,
        setProject,
        getProjectInformation,
        getArticle,
        articlesList,
        user,
        setUser,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
