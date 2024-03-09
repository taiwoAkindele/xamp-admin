import React from "react";
import { Route, Routes } from "react-router-dom";
import { protectedRoutes } from "../routes";

const Content = () => {
  return (
    <Routes>
      {protectedRoutes.map(({ path, element: Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
    </Routes>
  );
};

export default Content;
