// import React, { useState } from "react";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useCart } from "../../context/CartContextProvider";
// import { Badge } from "antd";
// import { getProductsCountInCart } from "../../helpers/function";

// const Navbar = () => {
//   // const { cart, getCart } = useCart();
//   // useEffect(() => {
//   //   getCart();
//   // }, []);

//   const [searchVisible, setSearchVisible] = useState(false);
//   const [badgeCount, setBadgeCount] = React.useState(0);
//   const { addProductToCart } = useCart();
//   React.useEffect(() => {
//     setBadgeCount(getProductsCountInCart());
//   }, [addProductToCart]);
//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <img
//             src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
//             alt="Warner Bros Logo"
//           />
//         </Link>

//         <ul className="navbar-menu">
//           <li>
//             <LocalMoviesIcon />
//             <Link to="/movies">Movie's</Link>
//           </li>
//           <li>
//             <LocalMoviesIcon />
//             <Link to="/cartoons">Cartoon's</Link>
//           </li>

//           <li>
//             <FavoriteIcon />
//             <Link to="/liked">Liked</Link>
//           </li>
//           <li>
//             <TurnedInIcon />
//             <Link to="/favorites">Favorites</Link>
//           </li>
//           {/* <Link to={"/shop"}>
//             <Badge badgeContent={badgeCount} color="success">
//               <ShoppingBasketIcon sx={{ color: "white" }} />
//             </Badge>
//           </Link> */}
//           <li>
//             <ShoppingBasketIcon />
//             <Link to="/shop">Shop</Link>
//           </li>

//           <li>
//             <PersonIcon />
//             <Link to="/admin">ADMIN</Link>
//           </li>
//         </ul>

//         <div className="search-box">
//           {searchVisible && (
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Фильмы, сериалы, мультфильмы..."
//             />
//           )}
//           <button onClick={toggleSearch} className="search-icon">
//             {searchVisible ? (
//               <CloseOutlinedIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             ) : (
//               <SearchIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             )}
//           </button>
//         </div>
//         <div className="avatar-box">
//           <Link to="/auth" className="avatar_icon">
//             <AccountCircleIcon />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//?auth
// import React, { useState, useEffect } from "react";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useCart } from "../../context/CartContextProvider";
// import { Badge } from "antd";
// import { getProductsCountInCart } from "../../helpers/function";
// import { useAuth } from "../../context/AuthContextProvider";
// import { ADMIN } from "../../helpers/const";
// import { MenuItem, Typography } from "@mui/material";

// const Navbar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [badgeCount, setBadgeCount] = React.useState(0);
//   const { addProductToCart } = useCart();
//   const { user, handleLogOut } = useAuth(); // Извлечение необходимых данных из контекста

//   useEffect(() => {
//     setBadgeCount(getProductsCountInCart());
//   }, [addProductToCart]);

//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <img
//             src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
//             alt="Warner Bros Logo"
//           />
//         </Link>

//         <ul className="navbar-menu">
//           <li>
//             <LocalMoviesIcon />
//             <Link to="/movies">Movies</Link>
//           </li>
//           <li>
//             <LocalMoviesIcon />
//             <Link to="/cartoons">Cartoons</Link>
//           </li>

//           <li>
//             <FavoriteIcon />
//             <Link to="/liked">Liked</Link>
//           </li>
//           <li>
//             <TurnedInIcon />
//             <Link to="/favorites">Favorites</Link>
//           </li>
//           <li>
//             <Link to="/shop">
//               <Badge badgeContent={badgeCount} color="success">
//                 <ShoppingBasketIcon sx={{ color: "white" }} />
//               </Badge>
//             </Link>
//           </li>
//           <li>
//             <ShoppingBasketIcon />
//             <Link to="/shop">Shop</Link>
//           </li>
//           {user?.email === ADMIN ? (
//             <li>
//               <PersonIcon />
//               <Link to="/admin">ADMIN</Link>
//             </li>
//           ) : null}
//         </ul>
//         {user ? (
//           <MenuItem onClick={handleLogOut}>
//             <Typography sx={{ color: "white" }}>LogOut</Typography>
//           </MenuItem>
//         ) : (
//           <Link to="/auth">
//             <MenuItem>
//               <Typography sx={{ color: "white" }}>Register</Typography>
//             </MenuItem>
//           </Link>
//         )}
//         <div className="search-box">
//           {searchVisible && (
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search for movies, series, cartoons..."
//             />
//           )}
//           <button onClick={toggleSearch} className="search-icon">
//             {searchVisible ? (
//               <CloseOutlinedIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             ) : (
//               <SearchIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             )}
//           </button>
//         </div>
//         <div className="avatar-box">
//           {user ? (
//             <button onClick={handleLogOut} className="avatar_icon">
//               <AccountCircleIcon />
//             </button>
//           ) : (
//             <Link to="/auth" className="avatar_icon">
//               <AccountCircleIcon />
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//! cart
// import React, { useState } from "react";
// import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import TurnedInIcon from "@mui/icons-material/TurnedIn";
// import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { useCart } from "../../context/CartContextProvider";

// import { getProductsCountInCart } from "../../helpers/function";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Badge from "@mui/material/Badge";
// // import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

// const Navbar = () => {
//   // const { cart, getCart } = useCart();
//   // useEffect(() => {
//   //   getCart();
//   // }, []);
//   const { cart } = useCart();
//   const cartCount = (cart.cartoons || []).length + (cart.movies || []).length;
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [badgeCount, setBadgeCount] = React.useState(0);
//   const { addProductToCart } = useCart();
//   React.useEffect(() => {
//     setBadgeCount(getProductsCountInCart());
//   }, [addProductToCart]);
//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           <img
//             src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
//             alt="Warner Bros Logo"
//           />
//         </Link>

//         <ul className="navbar-menu">
//           <li>
//             <LocalMoviesIcon />
//             {/* <p style={{ fontSize: "20px" }}>📺</p> */}
//             <Link to="/movies">Movie's</Link>
//           </li>
//           <li>
//             {/* <LocalMoviesIcon /> */}
//             <p style={{ fontSize: "20px" }}>🎥</p>
//             <Link to="/cartoons">Cartoon's</Link>
//           </li>

//           <li>
//             <FavoriteIcon />
//             {/* <p style={{ fontSize: "20px" }}>🩷</p> */}
//             <Link to="/liked">Liked</Link>
//           </li>
//           <li>
//             <TurnedInIcon />
//             {/* <p style={{ fontSize: "20px" }}>⭐️</p> */}
//             <Link to="/favorites">Favorites</Link>
//           </li>
//           <li>
//             <Link to="/cart">
//               <Badge badgeContent={cartCount} color="primary">
//                 {/* <ShoppingCartIcon /> */}
//                 {/* <StorefrontOutlinedIcon /> */}
//                 <p style={{ fontSize: "20px" }}>🛒</p>
//               </Badge>
//               <span>Shop</span>
//             </Link>
//           </li>
//           {/* <li>
//             <ShoppingBasketIcon />
//             <Link to="/shop">Shop</Link>
//           </li> */}

//           <li>
//             <PersonIcon />
//             {/* <p style={{ fontSize: "20px" }}>🙆🏻</p> */}
//             <Link to="/admin">ADMIN</Link>
//           </li>
//         </ul>

//         <div className="search-box">
//           {searchVisible && (
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Фильмы, сериалы, мультфильмы..."
//             />
//           )}
//           <button onClick={toggleSearch} className="search-icon">
//             {searchVisible ? (
//               <CloseOutlinedIcon
//                 sx={{
//                   fontSize: 35,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//             ) : (
//               // <p style={{ marginLeft: "10px", fontSize: "20px" }}>❌</p>
//               <SearchIcon
//                 sx={{
//                   fontSize: 30,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//               />
//               // <p style={{ fontSize: "20px" }}>🔍</p>
//             )}
//           </button>
//         </div>
//         <div className="avatar-box">
//           <Link to="/auth" className="avatar_icon">
//             <AccountCircleIcon />
//             {/* <p style={{ fontSize: "20px" }}>👤</p> */}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
//!?(((((((((((((((((((((((((())))))))))))))))))))))))))
import React, { useState, useEffect } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContextProvider";
import { Badge } from "@mui/material";
import { getProductsCountInCart } from "../../helpers/function";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import { MenuItem, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const { cart } = useCart();
  const { user, handleLogOut } = useAuth();
  const cartCount = (cart.cartoons || []).length + (cart.movies || []).length;

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://static-prod.adweek.com/wp-content/uploads/2019/11/new-warner-bros-logo-transformation-content-2019.gif"
            alt="Warner Bros Logo"
          />
        </Link>

        <ul className="navbar-menu">
          <li>
            <LocalMoviesIcon />
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <LocalMoviesIcon />
            <Link to="/cartoons">Cartoons</Link>
          </li>

          <li>
            <FavoriteIcon />
            <Link to="/liked">Liked</Link>
          </li>
          <li>
            <TurnedInIcon />
            <Link to="/favorites">Favorites</Link>
          </li>
          {/* <Link to="/cart">
//               <Badge badgeContent={cartCount} color="primary">
//                 <ShoppingCartIcon />
//                 <StorefrontOutlinedIcon />
//                 <p style={{ fontSize: "20px" }}>🛒</p>
//               </Badge>
//               <span>Shop</span>
//             </Link> */}
          <li>
            <Link to="/cart">
              <Badge badgeContent={cartCount} color="primary">
                {/* <ShoppingCartIcon sx={{ color: "white" }} /> */}
                <p style={{ fontSize: "20px" }}>🛒</p>
              </Badge>
              <span>Shop</span>
            </Link>
          </li>
          {user?.email === ADMIN ? (
            <li>
              <PersonIcon />
              <Link to="/admin">ADMIN</Link>
            </li>
          ) : null}
        </ul>

        <div className="search-box">
          {searchVisible && (
            <input
              type="text"
              className="search-input"
              placeholder="Search for movies, series, cartoons..."
            />
          )}
          <button onClick={toggleSearch} className="search-icon">
            {searchVisible ? (
              <CloseOutlinedIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            ) : (
              <SearchIcon
                sx={{
                  fontSize: 35,
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            )}
          </button>
        </div>

        {/* {user ? (
          <MenuItem onClick={handleLogOut}>
            <Typography sx={{ color: "white" }}>LogOut</Typography>
          </MenuItem>
        ) : (
          <Link to="/auth">
            <MenuItem>
              <Typography sx={{ color: "black" }}>Register</Typography>
            </MenuItem>
          </Link>
        )} */}
        <div className="avatar-box">
          {user ? (
            <button onClick={handleLogOut} className="avatar_icon">
              <AccountCircleIcon />
            </button>
          ) : (
            <Link to="/auth" className="avatar_icon">
              <AccountCircleIcon />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
