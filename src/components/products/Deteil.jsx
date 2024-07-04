// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import "./Deteil.modal.css";

// // Компонент для отображения деталей фильма
// const Deteil = ({ movie, handleCloseModal }) => {
//   // Состояния для отслеживания, добавлен ли фильм в закладки и в избранное
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);

//   // Хук useEffect для инициализации состояния закладок и избранного при изменении фильма
//   useEffect(() => {
//     // Получаем сохраненные фильмы из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];

//     // Проверяем, находится ли фильм в избранном или закладках
//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     // Устанавливаем состояние в зависимости от наличия фильма в localStorage
//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//   }, [movie.title]);

//   // Функция для переключения состояния закладок
//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);

//     // Получаем список избранных фильмов из localStorage
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       // Если фильм уже в закладках, удаляем его
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       // Если фильм не в закладках, добавляем его
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
//   };

//   // Функция для переключения состояния избранного
//   const handleFavorite = () => {
//     setIsFavoriteMark(!isFavoriteMark);

//     // Получаем список понравившихся фильмов из localStorage
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     if (isFavoriteMark) {
//       // Если фильм уже в избранном, удаляем его
//       const updatedLikedMovies = likedMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
//     } else {
//       // Если фильм не в избранном, добавляем его
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
import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SellIcon from "@mui/icons-material/Sell";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Deteil.modal.css";
import { useCart } from "../../context/CartContextProvider";
import axios from "axios";

const Deteil = ({ cartoon, handleCloseModal, onDelete }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isAddCommentModalOpen, setIsAddCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("Guest");
  const [isInCart, setIsInCart] = useState(false);

  const { addProductToCart, checkProductInCart } = useCart();

  useEffect(() => {
    const likedCartoons =
      JSON.parse(localStorage.getItem("likedCartoons")) || [];
    const favoriteCartoons =
      JSON.parse(localStorage.getItem("favoriteCartoons")) || [];
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${cartoon.title}`)) || [];

    const isCartoonLiked =
      Array.isArray(likedCartoons) &&
      likedCartoons.some((c) => c.title === cartoon.title);
    const isCartoonFavorited =
      Array.isArray(favoriteCartoons) &&
      favoriteCartoons.some((c) => c.title === cartoon.title);
    const isCartoonInCart =
      checkProductInCart && checkProductInCart(cartoon.id, "cartoons");

    setIsFavoriteMark(isCartoonLiked);
    setIsBookmarked(isCartoonFavorited);
    setComments(savedComments);
    setIsInCart(isCartoonInCart);
  }, [cartoon.title, checkProductInCart]);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const favoriteCartoons =
      JSON.parse(localStorage.getItem("favoriteCartoons")) || [];
    if (isBookmarked) {
      const updatedFavoriteCartoons = favoriteCartoons.filter(
        (c) => c.title !== cartoon.title
      );
      localStorage.setItem(
        "favoriteCartoons",
        JSON.stringify(updatedFavoriteCartoons)
      );
    } else {
      localStorage.setItem(
        "favoriteCartoons",
        JSON.stringify([...favoriteCartoons, cartoon])
      );
    }
  };

  const handleFavorite = () => {
    setIsFavoriteMark(!isFavoriteMark);
    const likedCartoons =
      JSON.parse(localStorage.getItem("likedCartoons")) || [];
    if (isFavoriteMark) {
      const updatedLikedCartoons = likedCartoons.filter(
        (c) => c.title !== cartoon.title
      );
      localStorage.setItem(
        "likedCartoons",
        JSON.stringify(updatedLikedCartoons)
      );
    } else {
      localStorage.setItem(
        "likedCartoons",
        JSON.stringify([...likedCartoons, cartoon])
      );
    }
  };

  const openCommentModal = () => {
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  const openAddCommentModal = () => {
    setIsAddCommentModalOpen(true);
  };

  const closeAddCommentModal = () => {
    setIsAddCommentModalOpen(false);
  };

  const addComment = async () => {
    if (newComment.trim() && newComment.length <= 50) {
      const newComments = [...comments, { username, text: newComment }];
      setComments(newComments);
      setNewComment("");
      localStorage.setItem(
        `comments-${cartoon.title}`,
        JSON.stringify(newComments)
      );
      closeAddCommentModal();

      try {
        const response = await axios.post("YOUR_SERVER_ENDPOINT", {
          cartoonTitle: cartoon.title,
          username,
          comment: newComment,
        });
        if (!response.status === 200) {
          throw new Error("Failed to submit comment");
        }
      } catch (error) {
        console.error("Error submitting comment:", error);
      }
    } else {
      alert("Comment must be between 1 and 50 characters");
    }
  };

  const deleteComment = (indexToDelete) => {
    const updatedComments = comments.filter(
      (_, index) => index !== indexToDelete
    );
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${cartoon.title}`,
      JSON.stringify(updatedComments)
    );
  };

  const handleAddToCart = () => {
    addProductToCart(cartoon, "cartoons");
    setIsInCart(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleCloseModal}>
          ×
        </span>
        <div className="modal-body">
          <img
            src={cartoon.image}
            alt={cartoon.title}
            className="modal-image"
          />
          <div className="cartoon-details">
            <h2>{cartoon.title}</h2>
            <p>{cartoon.description}</p>
            <div className="icons">
              {isFavoriteMark ? (
                <FavoriteIcon
                  sx={{ color: "#d50000" }}
                  onClick={handleFavorite}
                />
              ) : (
                <FavoriteBorderIcon
                  sx={{ color: "#d50000" }}
                  onClick={handleFavorite}
                />
              )}
              {isBookmarked ? (
                <BookmarkIcon
                  sx={{ color: "#ffd600" }}
                  onClick={toggleBookmark}
                />
              ) : (
                <BookmarkBorderIcon
                  sx={{ color: "#ffd600" }}
                  onClick={toggleBookmark}
                />
              )}
              <ModeCommentOutlinedIcon
                sx={{ color: "#2979ff" }}
                className="comment-icon"
                onClick={openCommentModal}
              />
            </div>
            <p>
              <strong>Year:</strong> {cartoon.year}
            </p>
            <p>
              <strong>Genre:</strong> {cartoon.genre}
            </p>
            <p>
              <strong>Rating:</strong> {cartoon.rating}
            </p>
            <p>
              <strong>Price:</strong> {cartoon.price}
            </p>
            <button
              className="buy-button"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              <SellIcon /> <br />
              {isInCart ? "In Cart" : "Buy Now"}
            </button>
          </div>
        </div>
        {isCommentModalOpen && (
          <div className="comment-modal">
            <div className="comment-modal-content">
              <span className="close-button" onClick={closeCommentModal}>
                ×
              </span>
              <h3>Comments</h3>
              <button
                className="add-comment-button"
                onClick={openAddCommentModal}
              >
                Add Comment
              </button>
              <div className="comments-list">
                {comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <strong>{comment.username}:</strong> {comment.text}
                    <DeleteIcon
                      className="delete-icon"
                      onClick={() => deleteComment(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {isAddCommentModalOpen && (
          <div className="add-comment-modal">
            <div className="add-comment-modal-content">
              <span className="close-button" onClick={closeAddCommentModal}>
                ×
              </span>
              <h3>Add a Comment</h3>
              <div className="comment-form">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment here"
                  maxLength="50"
                />
                <div className="comment-counter">{newComment.length}/50</div>
                <button onClick={addComment}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deteil;
