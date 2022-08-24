import { useState } from "react";

export const useSideBar = () => {
  const [show, toggleShow] = useState(false);

  return {
    show,
    toggleShow,
  };
};
