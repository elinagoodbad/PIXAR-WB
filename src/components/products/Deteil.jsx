// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./Deteil.css";
// import { blue } from "@mui/material/colors";

// // Компонент для отображения деталей фильма
// const Deteil = ({ movie, handleCloseModal }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [username, setUsername] = useState("Guest");

//   useEffect(() => {
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     const savedComments =
//       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

//     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited = favoriteMovies.some(
//       (m) => m.title === movie.title
//     );

//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//     setComments(savedComments);
//   }, [movie.title]);

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
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

//   const openCommentModal = () => {
//     setIsCommentModalOpen(true);
//   };

//   const closeCommentModal = () => {
//     setIsCommentModalOpen(false);
//   };

//   const addComment = async () => {
//     if (newComment.trim() && newComment.length <= 50) {
//       const newComments = [...comments, { username, text: newComment }];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem(
//         `comments-${movie.title}`,
//         JSON.stringify(newComments)
//       );
//       closeCommentModal();

//       try {
//         const response = await fetch("YOUR_SERVER_ENDPOINT", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ movieId: movie.id, comments: newComments }),
//         });
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log("Comments saved:", data);
//       } catch (error) {
//         console.error("Error saving comments:", error);
//       }
//     } else if (newComment.length > 50) {
//       alert("Comment cannot exceed 50 characters.");
//     }
//   };

//   const deleteComment = (indexToDelete) => {
//     const updatedComments = comments.filter(
//       (_, index) => index !== indexToDelete
//     );
//     setComments(updatedComments);
//     localStorage.setItem(
//       `comments-${movie.title}`,
//       JSON.stringify(updatedComments)
//     );
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
//             <div className="icons">
//               {isFavoriteMark ? (
//                 <FavoriteIcon
//                   sx={{ color: "#d50000" }}
//                   onClick={handleFavorite}
//                 />
//               ) : (
//                 <FavoriteBorderIcon
//                   sx={{ color: "#d50000" }}
//                   onClick={handleFavorite}
//                 />
//               )}
//               {isBookmarked ? (
//                 <BookmarkIcon
//                   sx={{ color: "#ffd600" }}
//                   onClick={toggleBookmark}
//                 />
//               ) : (
//                 <BookmarkBorderIcon
//                   sx={{ color: "#ffd600" }}
//                   onClick={toggleBookmark}
//                 />
//               )}
//               <ModeCommentOutlinedIcon
//                 sx={{ color: "#2979ff" }}
//                 className="comment-icon"
//                 onClick={openCommentModal}
//               />
//             </div>
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
//             <div className="comments-section">
//               <h3>Comments</h3>
//               <div className="comments-list">
//                 {comments.map((comment, index) => (
//                   <div key={index} className="comment-item">
//                     <strong>{comment.username}:</strong> {comment.text}
//                     <DeleteIcon
//                       className="delete-icon"
//                       onClick={() => deleteComment(index)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {isCommentModalOpen && (
//           <div className="comment-modal">
//             <div className="comment-modal-content">
//               <span className="close-button" onClick={closeCommentModal}>
//                 ×
//               </span>
//               <h3>Add a Comment</h3>
//               <div className="comment-form">
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Add a comment..."
//                   maxLength="50"
//                 />
//                 <div className="comment-counter">{newComment.length}/50</div>
//                 <button onClick={addComment}>Submit</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Deteil;
// //!
// // import React, { useState, useEffect } from "react";
// // import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// // import BookmarkIcon from "@mui/icons-material/Bookmark";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import SellIcon from "@mui/icons-material/Sell";
// // import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import "./Deteil.css";
// // import { blue } from "@mui/material/colors";
// // import { useCart } from "../../context/CartContextProvider";

// // const Deteil = ({ movie, handleCloseModal }) => {
// //   const [isBookmarked, setIsBookmarked] = useState(false);
// //   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
// //   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
// //   const [comments, setComments] = useState([]);
// //   const [newComment, setNewComment] = useState("");
// //   const [username, setUsername] = useState("Guest");
// //   const [isInCart, setIsInCart] = useState(false);

// //   const { addProductToCart, checkProductInCart } = useCart();

// //   useEffect(() => {
// //     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
// //     const favoriteMovies =
// //       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
// //     const savedComments =
// //       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

// //     const isMovieLiked = likedMovies.some((m) => m.title === movie.title);
// //     const isMovieFavorited = favoriteMovies.some(
// //       (m) => m.title === movie.title
// //     );
// //     const isMovieInCart = checkProductInCart(movie.id, "cartoons");

// //     setIsFavoriteMark(isMovieLiked);
// //     setIsBookmarked(isMovieFavorited);
// //     setComments(savedComments);
// //     setIsInCart(isMovieInCart);
// //   }, [movie.title, checkProductInCart]);

// //   const toggleBookmark = () => {
// //     setIsBookmarked(!isBookmarked);
// //     const favoriteMovies =
// //       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
// //     if (isBookmarked) {
// //       const updatedFavoriteMovies = favoriteMovies.filter(
// //         (m) => m.title !== movie.title
// //       );
// //       localStorage.setItem(
// //         "favoriteMovies",
// //         JSON.stringify(updatedFavoriteMovies)
// //       );
// //     } else {
// //       localStorage.setItem(
// //         "favoriteMovies",
// //         JSON.stringify([...favoriteMovies, movie])
// //       );
// //     }
// //   };

// //   const handleFavorite = () => {
// //     setIsFavoriteMark(!isFavoriteMark);
// //     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
// //     if (isFavoriteMark) {
// //       const updatedLikedMovies = likedMovies.filter(
// //         (m) => m.title !== movie.title
// //       );
// //       localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
// //     } else {
// //       localStorage.setItem(
// //         "likedMovies",
// //         JSON.stringify([...likedMovies, movie])
// //       );
// //     }
// //   };

// //   const openCommentModal = () => {
// //     setIsCommentModalOpen(true);
// //   };

// //   const closeCommentModal = () => {
// //     setIsCommentModalOpen(false);
// //   };

// //   const addComment = async () => {
// //     if (newComment.trim() && newComment.length <= 50) {
// //       const newComments = [...comments, { username, text: newComment }];
// //       setComments(newComments);
// //       setNewComment("");
// //       localStorage.setItem(
// //         `comments-${movie.title}`,
// //         JSON.stringify(newComments)
// //       );
// //       closeCommentModal();

// //       try {
// //         const response = await fetch("YOUR_SERVER_ENDPOINT", {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             movieTitle: movie.title,
// //             username,
// //             comment: newComment,
// //           }),
// //         });
// //         if (!response.ok) {
// //           throw new Error("Failed to submit comment");
// //         }
// //       } catch (error) {
// //         console.error("Error submitting comment:", error);
// //       }
// //     } else {
// //       alert("Comment must be between 1 and 50 characters");
// //     }
// //   };

// //   const handleAddToCart = () => {
// //     addProductToCart(movie, "cartoons");
// //     setIsInCart(true);
// //   };

// //   return (
// //     <div className="detailed-movie-container">
// //       <h2>{movie.title}</h2>
// //       <p>{movie.description}</p>
// //       <button onClick={handleCloseModal}>Close</button>
// //       <button onClick={handleAddToCart} disabled={isInCart}>
// //         {isInCart ? "In Cart" : "Add to Cart"}
// //       </button>
// //       <div>
// //         <button onClick={toggleBookmark}>
// //           {isBookmarked ? (
// //             <BookmarkIcon sx={{ color: blue[500] }} />
// //           ) : (
// //             <BookmarkBorderIcon />
// //           )}
// //         </button>
// //         <button onClick={handleFavorite}>
// //           {isFavoriteMark ? (
// //             <FavoriteIcon sx={{ color: blue[500] }} />
// //           ) : (
// //             <FavoriteBorderIcon />
// //           )}
// //         </button>
// //         <button onClick={openCommentModal}>
// //           <ModeCommentOutlinedIcon />
// //         </button>
// //         <button>
// //           <DeleteIcon />
// //         </button>
// //       </div>
// //       {isCommentModalOpen && (
// //         <div className="comment-modal">
// //           <h3>Comments</h3>
// //           <textarea
// //             value={newComment}
// //             onChange={(e) => setNewComment(e.target.value)}
// //             placeholder="Add your comment here"
// //           />
// //           <button onClick={addComment}>Add Comment</button>
// //           <button onClick={closeCommentModal}>Close</button>
// //           <ul>
// //             {comments.map((comment, index) => (
// //               <li key={index}>
// //                 <strong>{comment.username}:</strong> {comment.text}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Deteil;
//!?!?!?!?!?!??!?!?!
// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SellIcon from "@mui/icons-material/Sell";
// import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
// import "./Deteil.css";
// import { blue } from "@mui/material/colors";
// import { useCart } from "../../context/CartContextProvider";

// const Deteil = ({ movie, handleCloseModal }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isFavoriteMark, setIsFavoriteMark] = useState(false);
//   const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");
//   const [username, setUsername] = useState("Guest");
//   const [isInCart, setIsInCart] = useState(false);

//   const { addProductToCart, checkProductInCart } = useCart();

//   useEffect(() => {
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     const savedComments =
//       JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

//     const isMovieLiked =
//       Array.isArray(likedMovies) &&
//       likedMovies.some((m) => m.title === movie.title);
//     const isMovieFavorited =
//       Array.isArray(favoriteMovies) &&
//       favoriteMovies.some((m) => m.title === movie.title);
//     const isMovieInCart =
//       checkProductInCart && checkProductInCart(movie.id, "cartoons");

//     setIsFavoriteMark(isMovieLiked);
//     setIsBookmarked(isMovieFavorited);
//     setComments(savedComments);
//     setIsInCart(isMovieInCart);
//   }, [movie.title, checkProductInCart]);

//   const toggleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//     const favoriteMovies =
//       JSON.parse(localStorage.getItem("favoriteMovies")) || [];
//     if (isBookmarked) {
//       const updatedFavoriteMovies = favoriteMovies.filter(
//         (m) => m.title !== movie.title
//       );
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify(updatedFavoriteMovies)
//       );
//     } else {
//       localStorage.setItem(
//         "favoriteMovies",
//         JSON.stringify([...favoriteMovies, movie])
//       );
//     }
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

//   const openCommentModal = () => {
//     setIsCommentModalOpen(true);
//   };

//   const closeCommentModal = () => {
//     setIsCommentModalOpen(false);
//   };

//   const addComment = async () => {
//     if (newComment.trim() && newComment.length <= 50) {
//       const newComments = [...comments, { username, text: newComment }];
//       setComments(newComments);
//       setNewComment("");
//       localStorage.setItem(
//         `comments-${movie.title}`,
//         JSON.stringify(newComments)
//       );
//       closeCommentModal();

//       try {
//         const response = await fetch("YOUR_SERVER_ENDPOINT", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             movieTitle: movie.title,
//             username,
//             comment: newComment,
//           }),
//         });
//         if (!response.ok) {
//           throw new Error("Failed to submit comment");
//         }
//       } catch (error) {
//         console.error("Error submitting comment:", error);
//       }
//     } else {
//       alert("Comment must be between 1 and 50 characters");
//     }
//   };

//   const deleteComment = (indexToDelete) => {
//     const updatedComments = comments.filter(
//       (_, index) => index !== indexToDelete
//     );
//     setComments(updatedComments);
//     localStorage.setItem(
//       `comments-${movie.title}`,
//       JSON.stringify(updatedComments)
//     );
//   };

//   const handleAddToCart = () => {
//     addProductToCart(movie, "cartoons");
//     setIsInCart(true);
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
//             <div className="icons">
//               {isFavoriteMark ? (
//                 <FavoriteIcon
//                   sx={{ color: "#d50000" }}
//                   onClick={handleFavorite}
//                 />
//               ) : (
//                 <FavoriteBorderIcon
//                   sx={{ color: "#d50000" }}
//                   onClick={handleFavorite}
//                 />
//               )}
//               {isBookmarked ? (
//                 <BookmarkIcon
//                   sx={{ color: "#ffd600" }}
//                   onClick={toggleBookmark}
//                 />
//               ) : (
//                 <BookmarkBorderIcon
//                   sx={{ color: "#ffd600" }}
//                   onClick={toggleBookmark}
//                 />
//               )}
//               <ModeCommentOutlinedIcon
//                 sx={{ color: "#2979ff" }}
//                 className="comment-icon"
//                 onClick={openCommentModal}
//               />
//             </div>
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
//             <button
//               className="buy-button"
//               onClick={handleAddToCart}
//               disabled={isInCart}
//             >
//               <SellIcon /> <br />
//               {isInCart ? "In Cart" : "Buy Now"}
//             </button>
//             <div className="comments-section">
//               <h3>Comments</h3>
//               <div className="comments-list">
//                 {comments.map((comment, index) => (
//                   <div key={index} className="comment-item">
//                     <strong>{comment.username}:</strong> {comment.text}
//                     <DeleteIcon
//                       className="delete-icon"
//                       onClick={() => deleteComment(index)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         {isCommentModalOpen && (
//           <div className="comment-modal">
//             <div className="comment-modal-content">
//               <span className="close-button" onClick={closeCommentModal}>
//                 ×
//               </span>
//               <h3>Add a Comment</h3>
//               <div className="comment-form">
//                 <textarea
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   placeholder="Add a comment..."
//                   maxLength="50"
//                 />
//                 <div className="comment-counter">{newComment.length}/50</div>
//                 <button onClick={addComment}>Submit</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Deteil;
//!!!!!!!!!!
import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SellIcon from "@mui/icons-material/Sell";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Deteil.css";
import { useCart } from "../../context/CartContextProvider";

const Deteil = ({ movie, handleCloseModal }) => {
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
    const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const favoriteMovies =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${movie.title}`)) || [];

    const isMovieLiked =
      Array.isArray(likedMovies) &&
      likedMovies.some((m) => m.title === movie.title);
    const isMovieFavorited =
      Array.isArray(favoriteMovies) &&
      favoriteMovies.some((m) => m.title === movie.title);
    const isMovieInCart =
      checkProductInCart && checkProductInCart(movie.id, "cartoons");

    setIsFavoriteMark(isMovieLiked);
    setIsBookmarked(isMovieFavorited);
    setComments(savedComments);
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
        `comments-${movie.title}`,
        JSON.stringify(newComments)
      );
      closeAddCommentModal();

      try {
        const response = await fetch("YOUR_SERVER_ENDPOINT", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            movieTitle: movie.title,
            username,
            comment: newComment,
          }),
        });
        if (!response.ok) {
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
      `comments-${movie.title}`,
      JSON.stringify(updatedComments)
    );
  };

  const handleAddToCart = () => {
    addProductToCart(movie, "cartoons");
    setIsInCart(true);
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
            <p>{movie.description}</p>
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
