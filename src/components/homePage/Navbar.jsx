import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge } from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import BackgroundChanger from "./BackgroundChanger";
import "./Navbar.modal.css";
import { useMovie } from "../../context/MovieContextProvider";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const [searchVisible, setSearchVisible] = useState(false);
  const { cart } = useCart();
  const { user, handleLogOut } = useAuth();
  const cartCount = (cart.cartoons || []).length + (cart.movies || []).length;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { movies, cartoons, getMoviesAndCartoons } = useMovie();

  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    setSearchParams({ q: search });
    getMoviesAndCartoons();
  }, [search]);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const speechRecognition = new window.webkitSpeechRecognition();
      speechRecognition.continuous = true;
      speechRecognition.interimResults = false;
      speechRecognition.lang = "en-US";

      speechRecognition.onstart = () => {
        setIsListening(true);
      };

      speechRecognition.onend = () => {
        setIsListening(false);
      };

      speechRecognition.onresult = (event) => {
        const transcript =
          event.results[event.results.length - 1][0].transcript.trim();
        setSearch(transcript);
      };

      setRecognition(speechRecognition);
    }
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearch("");
    }
  };

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
    setSearchVisible(true);
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
    setSearch("");
  };

  // const toggleSearch = () => {
  //   setSearchVisible(!searchVisible);
  // };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  return (
    <nav className={`navbar ${burgerMenuActive ? "navbar-active" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
            alt="Warner Bros Logo"
          />
        </Link>
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <div className={`burger-icon ${burgerMenuActive ? "active" : ""}`}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
        <ul className={`navbar-menu ${burgerMenuActive ? "active" : ""}`}>
          <li>
            <p style={{ fontSize: "20px" }}>🎥</p>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <p style={{ fontSize: "20px" }}>🎠</p>
            <Link to="/cartoons">Cartoons</Link>
          </li>
          <li>
            <Link to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                <p style={{ fontSize: "20px" }}>🛒</p>
              </Badge>
              <span>Shop</span>
            </Link>
          </li>
          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            style={{ position: "relative" }}
          >
            <p style={{ fontSize: "20px" }}>🍔</p>
            {dropdownVisible && (
              <div className="dropdown-menu-burger">
                <Link to="/liked" className="dropdown-item-burger">
                  💗 Liked
                </Link>
                <Link to="/favorites" className="dropdown-item-burger">
                  ⭐️ Favorites
                </Link>
              </div>
            )}
          </li>
          {user?.email === ADMIN ? (
            <li>
              <p style={{ fontSize: "20px" }}>🙆🏻</p>
              <Link to="/admin">ADMIN</Link>
            </li>
          ) : null}
        </ul>
        {/* <div
          className={`search-box ${searchVisible ? "search-box-active" : ""}`}
        >
          {searchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Search for movies, series, cartoons..."
            />
          )}
          <button onClick={toggleSearch} className="search-icon">
            {searchVisible ? (
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>❌</p>
            ) : (
              <p style={{ fontSize: "20px" }}>🔍</p>
            )}
          </button>
        </div> */}
        <div className="search-box">
          {searchVisible && (
            <>
              <input
                type="text"
                className="search-input"
                placeholder="Search for movies, series, cartoons..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              {search.length > 0 && (
                <ul className="search-results">
                  {movies
                    .filter((movie) =>
                      movie.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((movie) => (
                      <Link
                        to={`/movies/${movie.title}`}
                        key={movie.id}
                        className="search-result-item"
                      >
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="search-result-thumbnail"
                        />
                        <div className="search-result-details">
                          <h4>{movie.title}</h4>
                          <p>{movie.releaseYear}</p>
                          <p>{movie.genre}</p> å
                        </div>
                      </Link>
                    ))}
                  {cartoons
                    .filter((cartoon) =>
                      cartoon.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((cartoon) => (
                      <Link
                        to={`/cartoons/${cartoon.title}`}
                        key={cartoon.id}
                        className="search-result-item"
                      >
                        <img
                          src={cartoon.image}
                          alt={cartoon.title}
                          className="search-result-thumbnail"
                        />
                        <div className="search-result-details">
                          <h4>{cartoon.title}</h4>
                          <p>{cartoon.releaseYear}</p>
                          <p>{cartoon.genre}</p>
                        </div>
                      </Link>
                    ))}
                </ul>
              )}
            </>
          )}
          <button onClick={toggleSearch} className="search-icon">
            {searchVisible ? (
              // <CloseOutlinedIcon
              //   sx={{
              //     fontSize: 35,
              //     backgroundColor: "white",
              //     color: "black",
              //   }}
              // />
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>❌</p>
            ) : (
              // <SearchIcon
              //   sx={{
              //     fontSize: 35,
              //     backgroundColor: "white",
              //     color: "black",
              //   }}
              // />
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>🔍</p>
            )}
          </button>
          {/* Кнопка для начала и остановки голосового поиска */}
          <button
            onClick={isListening ? stopListening : startListening}
            className="mic-icon"
          >
            {isListening ? (
              // <MicOffIcon
              //   sx={{
              //     marginLeft: "10px",
              //     fontSize: 35,
              //     backgroundColor: "white",
              //     color: "black",
              //   }}
              // />
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>🔊</p>
            ) : (
              // <MicIcon
              //   sx={{
              //     fontSize: 35,
              //     backgroundColor: "white",
              //     color: "black",
              //   }}
              // />
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>🔇</p>
            )}
          </button>
        </div>
        <div className="avatar-box">
          {user ? (
            <button onClick={handleLogOut} className="avatar_icon">
              {/* <AccountCircleIcon /> */}
              <p style={{ fontSize: "20px", marginLeft: "10px" }}>👤</p>
            </button>
          ) : (
            <Link to="/auth" className="avatar_icon">
              <p
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                👤
              </p>
              {/* <AccountCircleIcon sx={{ marginLeft: "15px" }} /> */}
            </Link>
          )}

          {user ? `Hello, ${user.email}!` : "Register"}
        </div>
        <BackgroundChanger />
      </div>
    </nav>
  );
};

export default Navbar;
