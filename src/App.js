import React from "react";
import NewMovie from "./components/homePage/NewMovie";
import Auth from "./auth/Auth";
import AuthPage from "./pages/AuthPage";
import { Link } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
