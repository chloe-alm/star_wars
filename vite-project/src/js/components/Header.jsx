import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const title = useSelector((state) => state.settings.appName);

  return <p>{title}</p>;
};
