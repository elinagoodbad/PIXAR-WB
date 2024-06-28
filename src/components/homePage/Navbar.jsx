import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import avatar from "./assets/avatar.png";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TvIcon from "@mui/icons-material/Tv";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Navbar.css";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="WB" />
        </a>
        {/* <button className="navbar-burger-btn active">
          <span></span>
          <span></span>
          <span></span>
        </button> */}
        <ul className="navbar-menu">
          <li>
            <LocalMoviesIcon />
            <a href="#">Movies</a>
          </li>
          <li>
            <TvIcon />
            <a href="#">TV Shows</a>
          </li>
          <li>
            <StarBorderIcon />
            <a href="#">Brands</a>
          </li>
          <li>
            <BookmarksIcon />
            <a href="#">Collections</a>
          </li>
          <li>
            <ShoppingBasketIcon />
            <a href="#">Shop</a>
          </li>
        </ul>
        <div className="search-box">
          {searchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Фильмы, сериалы, мультфильмы..."
            />
          )}
          <button onClick={toggleSearch} className="search-icon">
            {searchVisible ? (
              <CloseIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "black",
                  color: "white",
                }}
              />
            ) : (
              <SearchIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "black",
                  color: "white",
                }}
              />
            )}
          </button>
        </div>
        <div className="avatar-box">
          <button className="avatar_icon">
            <img src={avatar} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
