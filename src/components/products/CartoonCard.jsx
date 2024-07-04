import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "../../context/AuthContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { ADMIN } from "../../helpers/const";
import axios from "axios";
import "./CartoonCard.modal.css";

const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addProductToCart, checkProductInCart } = useCart();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFavoriteMark, setIsFavoriteMark] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isAddCommentModalOpen, setIsAddCommentModalOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

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

  const handleAddToCart = () => {
    addProductToCart(cartoon, "cartoons");
    setIsInCart(true);
  };

  const handleEdit = () => {
    navigate(`/edit/${cartoon.id}`);
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
      const newComments = [
        ...comments,
        { username: user?.username || "Guest", text: newComment },
      ];
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
          username: user?.username || "Guest",
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

  return (
    <div className="cartoon-card">
      <Link to={`/cartoons/${cartoon.title}`}>
        <img
          src={cartoon.image}
          alt={cartoon.title}
          className="cartoon-image"
          onClick={() => onOpenModal(cartoon)}
        />
      </Link>
      <h2 className="cartoon-title">{cartoon.title}</h2>
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
          className="comment-icon-modal-main"
          onClick={openCommentModal}
        />
        {user && user.email === ADMIN && (
          <>
            <DeleteIcon
              sx={{ color: "#d32f2f", cursor: "pointer" }}
              onClick={() => onDelete(cartoon.id)}
            />
            <EditIcon
              sx={{ color: "#1976d2", cursor: "pointer" }}
              onClick={handleEdit}
            />
          </>
        )}
      </div>
      <button
        className="buy-button"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "In Cart" : "Buy Now"}
      </button>

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
  );
};

export default CartoonCard;
