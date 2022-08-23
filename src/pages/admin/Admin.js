import React, { useContext } from "react";
import { SiteContext } from "../../context/Context";
import "./Admin.css";
import { useLocation } from "react-router-dom";

export const Admin = () => {
  let location = useLocation();
  const { user } = useContext(SiteContext);
  console.log(location.pathname);
  console.log(user);
  return (
    <div className="admin-page">
      Admin
      <div>Mp</div> <div>Ok</div>
    </div>
  );
};
