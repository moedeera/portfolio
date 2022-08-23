import React, { useContext } from "react";
import { SiteContext } from "../../context/Context";
import { Outlet } from "react-router-dom";
import { Homepage } from "../../pages/homepage/Homepage";

export const ProtectedRoutes = () => {
  const { user } = useContext(SiteContext);

  return user.logged ? <Outlet /> : <Homepage />;
};
