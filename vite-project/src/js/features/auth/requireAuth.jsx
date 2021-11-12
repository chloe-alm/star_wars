import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { Layout } from "../layout/Layout";

export const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  let location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Layout children={children}></Layout>;
};
