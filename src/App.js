import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
