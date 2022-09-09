import { useState } from "react";

export const useSideBar = () => {
  const [show, toggleShow] = useState(false);

  const [sideBarView, setSideBarView] = useState("overview");

  return {
    show,
    toggleShow,
    sideBarView,
    setSideBarView,
  };
};
