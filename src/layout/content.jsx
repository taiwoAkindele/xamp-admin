import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes } from "../routes";

const Content = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <Routes>
          {protectedRoutes.map(({ path, element: Component }) => (
            <Route key={path} path={path} element={Component} />
          ))}
        </Routes>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default Content;
