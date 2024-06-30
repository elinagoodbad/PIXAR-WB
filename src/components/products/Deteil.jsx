// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import "./Deteil.css";

// const Deteil = ({ movie, handleCloseModal }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);

//   useEffect(() => {
//     // Проверяем, добавлен ли фильм в избранное при монтировании компонента
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     setIsFavoriteMark(isMovieLiked);
//   }, [movie.title]);

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       localStorage.setItem(
//         "likedMovies",
//         JSON.stringify([...likedMovies, movie])
//       );
//     }
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={handleCloseModal}>
//           ×
//         </span>
//         <div className="modal-body">
//           <img src={movie.image} alt={movie.title} className="modal-image" />
//           <div className="movie-details">
//             <h2>{movie.title}</h2>
//             {isFavoriteMark ? (
//               <FavoriteIcon onClick={handleFavorite} />
//             ) : (
//               <FavoriteBorderIcon onClick={handleFavorite} />
//             )}
//             {isBookmarked ? (
//               <BookmarkIcon onClick={toggleBookmark} />
//             ) : (
//               <BookmarkBorderIcon onClick={toggleBookmark} />
//             )}
//             <p>
//               <strong>Year:</strong> {movie.year}
//             </p>
//             <p>
//               <strong>Genre:</strong> {movie.genre}
//             </p>
//             <p>
//               <strong>Rating:</strong> {movie.rating}
//             </p>
//             <p>
//               <strong>Price:</strong> {movie.price}
//             </p>

//             <button className="buy-button">
//               <SellIcon /> <br />
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deteil;
//!!
// src/components/Deteil.js
import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SellIcon from "@mui/icons-material/Sell";
import "./Deteil.css";

const Deteil = ({ movie, handleCloseModal }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);

  useEffect(() => {
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
    const isMovieFavorited = favoriteMovies.some(
      (m) => m.title === movie.title
    );

    setIsFavoriteMark(isMovieLiked);
    setIsBookmarked(isMovieFavorited);
  }, [movie.title]);

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

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseModal}>
          ×
        </span>
        <div className="modal-body">
          <img src={movie.image} alt={movie.title} className="modal-image" />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            {isFavoriteMark ? (
              <FavoriteIcon onClick={handleFavorite} />
            ) : (
              <FavoriteBorderIcon onClick={handleFavorite} />
            )}
            {isBookmarked ? (
              <BookmarkIcon onClick={toggleBookmark} />
            ) : (
              <BookmarkBorderIcon onClick={toggleBookmark} />
            )}
            <p>
              <strong>Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p>
              <strong>Price:</strong> {movie.price}
            </p>

            <button className="buy-button">
              <SellIcon /> <br />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deteil;
