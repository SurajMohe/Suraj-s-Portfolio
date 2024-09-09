import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../mainPage/MainPage';

export const ProtectedRoutes = () => {

  const ProtectedRouteMap = Object.freeze({
    "/": <MainPage/>,
  });

  return (
    <Routes>
      {Object.entries(ProtectedRouteMap).map(([route, Component]) => (
        <Route
          key={route}
          path={route}
          element={Component}
        />
      ))}
    </Routes>
  );
}
