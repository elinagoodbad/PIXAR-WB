import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage";

import LikedPage from "../pages/LikedPage";
import FavoritePage from "../pages/FavoritePage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import NewCartoon from "../components/homePage/NewCartoon";
import CartPage from "../pages/CartPage";
// import MovieList from "../components/products/MovieList";
import EditMovie from "../components/products/EditMovie";
import CartoonDetailPage from "../pages/CartoonDetailPage";
import MoviePage from "../pages/MoviePage";
import CartoonPage from "../pages/CartoonPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },

    { id: 2, link: "/movies", element: <MoviePage /> },
    { id: 3, link: "/cartoons", element: <CartoonPage /> },
    { id: 4, link: "/liked", element: <LikedPage /> },
    { id: 5, link: "/favorites", element: <FavoritePage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    { id: 7, link: "/cart", element: <CartPage /> },
    { id: 8, link: "/auth", element: <AuthPage /> },
    { id: 9, link: "/cartoons/:title", element: <CartoonDetailPage /> },
    { id: 10, link: "/movies/:title", element: <MovieDetailPage /> },
    { id: 11, link: "/cartoons/:title", element: <CartoonDetailPage /> },
    { id: 12, link: "/edit/:id", element: <EditMovie /> },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route path={route.link} element={route.element} key={route.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
