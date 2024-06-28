import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/homePage/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
