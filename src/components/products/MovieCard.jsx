import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SellIcon from "@mui/icons-material/Sell";
import { useAuth } from "../../context/AuthContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { ADMIN } from "../../helpers/const";
import "./MovieCard.modal.css";

const MovieCard = ({ movie, onOpenModal, onDelete }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addProductToCart, checkProductInCart } = useCart();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isMovieLiked =
      Array.isArray(likedMovies) &&
      likedMovies.some((m) => m.title === movie.title);
    const isMovieFavorited =
      Array.isArray(favoriteMovies) &&
      favoriteMovies.some((m) => m.title === movie.title);
    const isMovieInCart =
      checkProductInCart && checkProductInCart(movie.id, "movies");

    setIsFavoriteMark(isMovieLiked);
    setIsBookmarked(isMovieFavorited);
    setIsInCart(isMovieInCart);
  }, [movie.title, checkProductInCart]);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    if (isBookmarked) {
      const updatedFavoriteMovies = favoriteMovies.filter(
        (m) => m.title !== movie.title
      );
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify(updatedFavoriteMovies)
      );
    } else {
      localStorage.setItem(
        "favoriteMovies",
        JSON.stringify([...favoriteMovies, movie])
      );
    }
  };

  const handleFavorite = () => {
    setIsFavoriteMark(!isFavoriteMark);
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    if (isFavoriteMark) {
      const updatedLikedMovies = likedMovies.filter(
        (m) => m.title !== movie.title
      );
      localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
    } else {
      localStorage.setItem(
        "likedMovies",
        JSON.stringify([...likedMovies, movie])
      );
    }
  };

  const handleAddToCart = () => {
    addProductToCart(movie, "movies");
    setIsInCart(true);
  };

  const handleEdit = () => {
    navigate(`/edit/${movie.id}`);
  };

  return (
    <div className="cartoon-card">
      <Link to={`/movies/${movie.title}`}>
        <img
          src={movie.image}
          alt={movie.title}
          className="cartoon-image"
          onClick={() => onOpenModal(movie)}
        />
      </Link>
      <h2 className="carttoon-title">{movie.title}</h2>
      <div className="icons">
        {isFavoriteMark ? (
          <FavoriteIcon
            sx={{ color: "#d50000", cursor: "pointer" }}
            onClick={handleFavorite}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{ color: "#d50000", cursor: "pointer" }}
            onClick={handleFavorite}
          />
        )}
        {isBookmarked ? (
          <BookmarkIcon
            sx={{ color: "#ffd600", cursor: "pointer" }}
            onClick={toggleBookmark}
          />
        ) : (
          <BookmarkBorderIcon
            sx={{ color: "#ffd600", cursor: "pointer" }}
            onClick={toggleBookmark}
          />
        )}
        <ModeCommentOutlinedIcon
          sx={{ color: "#2979ff", cursor: "pointer" }}
          onClick={() => onOpenModal(movie)}
        />
        {user && user.email === ADMIN && (
          <>
            <DeleteIcon
              sx={{ color: "#d32f2f", cursor: "pointer" }}
              onClick={() => onDelete(movie.id)}
            />
            <EditIcon
              sx={{ color: "#1976d2", cursor: "pointer" }}
              onClick={handleEdit}
            />
          </>
        )}
        {/* <SellIcon
          sx={{ color: "#ff6f00", cursor: "pointer" }}
          onClick={handleAddToCart}
        /> */}
      </div>
      <button
        className="buy-button"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "In Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default MovieCard;
