import { createContext, useState } from "react";
import { useProjects } from "../Hooks/useProjects";
import { useArticles } from "../Hooks/useArticles";
import { useSideBar } from "../Hooks/useSideBar";
import { useEffect } from "react";
import { useProfile } from "../Hooks/useProfile";
import { useMessages } from "../Hooks/useMessages";
import { profiles } from "../assets/data/admin-data";
import axios from "axios";
import { useMemo } from "react";

export const SiteContext = createContext({});
// Checks for a token in local storage
const LoadUser = async () => {
  const dummyUser = {
    logged: false,
    token: null,
  };

  if (localStorage.getItem("token")) {
    let token = JSON.parse(localStorage.getItem("token"));
    return {
      logged: true,
      token,
    };
  } else return dummyUser;
};

export const SiteContextProvider = ({ children }) => {
  //Project Storage
  const { projects, setProject } = useProjects();
  //Blog Article Storage
  const { articlesList } = useArticles();
  // SideBar Toggle
  const { show, toggleShow } = useSideBar();
  //User Storage
  //Declaring a user variable for Administrator
  const [user, setUser] = useState(null);
  // Profile storage
  const { profile, setProfile, fetchProfile } = useProfile();
  // Message Fetch storage
  const { messages, setMessages } = useMessages();
  //Fetches specific project information [offline]
  const getProjectInformation = (id) => {
    let projectInfo = null;
    const match = projects.some((project) => project.title === id);

    if (match) {
      projectInfo = projects.find((project) => project.title === id);
      console.log(projectInfo);
      return projectInfo;
    }
    return {
      id: null,
      orientation: "error",
      title: "error",
      icons: [],
      pics: [require("../pages/Project/error.jpeg")],
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

  //Fetches specific article information [offline]
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
      pics: [],
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

  //Fetches specific profile information [online]

  // Hook loads once to fetch the state of log (logged in or out)
  useEffect(() => {
    const getUser = async () => {
      const newUser = await LoadUser();
      setUser(newUser);
    };

    getUser().catch(console.error);
  }, []);

  //

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
        profile,
        setProfile,
        show,
        toggleShow,
        fetchProfile,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
