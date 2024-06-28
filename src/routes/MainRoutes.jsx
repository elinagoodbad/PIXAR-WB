import React from "react";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import NewMovie from "../components/homePage/NewMovie";
import MovieDetailPage from "../pages/MovieDetailPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    // { id: 1, link: "/", element: <HomePage /> },
    // { id: 2, link: "/products", element: <ProductPage /> },
    // { id: 3, link: "/edit/:id", element: <EditProduct /> },
    // { id: 4, link: "/about", element: <AboutPage /> },
    // { id: 6, link: "/admin", element: <AdminPage /> },
    // { id: 7, link: "/cart", element: <CartPage /> },
    { id: 1, link: "/movie", element: <NewMovie /> },
    { id: 2, link: "/movie/:title", element: <MovieDetailPage /> },
    { id: 3, link: "/auth", element: <AuthPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
