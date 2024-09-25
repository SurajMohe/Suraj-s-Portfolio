import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, MyCartPage, MyWorkPage, UserPage } from '../pages';
export const ProtectedRoutes = () => {

  const ProtectedRouteMap = Object.freeze({
    "/": <MainPage />,
    "/user": <UserPage />,
    '/work':<MyWorkPage/>,
    '/cart':<MyCartPage/>,
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
