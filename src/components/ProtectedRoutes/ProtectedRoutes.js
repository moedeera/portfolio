import React, { useContext } from "react";
import { SiteContext } from "../../context/Context";
import { Outlet } from "react-router-dom";
import { Login } from "../../pages/admin/login/Login";

export const ProtectedRoutes = () => {
  const { user } = useContext(SiteContext);
  return user?.logged ? <Outlet /> : <Login />;
};
