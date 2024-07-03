// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./MovieCard.modal.css"; // Импорт стилей для MovieCard
// import { Button } from "@mui/material";
// import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

// const MovieCard = ({ movie, onOpenModal, onDelete }) => {
//   const navigate = useNavigate(); // Хук для навигации

//   const handleEdit = () => {
//     navigate(`/edit/${movie.id}`); // Перенаправление на страницу редактирования фильма
//   };

//   return (
//     <div className="movie-card">
//       <Link to={`/movies/${movie.title}`}>
//         <img
//           src={movie.image}
//           alt={movie.title}
//           className="movie-image"
//           onClick={() => onOpenModal(movie)} // Open modal on image click
//         />
//       </Link>
//       <h2 className="movie-title">{movie.title}</h2>
//       <Button
//         className="details-button"
//         onClick={() => onOpenModal(movie)}
//         variant="contained"
//       >
//         MORE
//       </Button>
//       <Button
//         color="error"
//         variant="outlined"
//         size="small"
//         onClick={() => onDelete(movie.id)} // Вызов функции удаления
//         startIcon={<DeleteIcon />}
//       >
//         Delete
//       </Button>
//       <Button
//         onClick={handleEdit}
//         color="primary"
//         variant="outlined"
//         size="small"
//         startIcon={<EditIcon />}
//       >
//         Edit
//       </Button>
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MovieCard.modal.css";
import { Button } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useMovie } from "../../context/MovieContextProvider";

const MovieCard = ({ movie, onOpenModal, onDelete }) => {
  const { deleteMovie } = useMovie();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.title}`}>
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-image"
          onClick={() => onOpenModal(movie)}
        />
      </Link>
      <h2 className="movie-title">{movie.title}</h2>
      <Button
        className="details-button"
        onClick={() => onOpenModal(movie)}
        variant="contained"
      >
        MORE
      </Button>
      <Button
        color="error"
        variant="outlined"
        size="small"
        onClick={() => {
          deleteMovie(movie.id);
        }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        onClick={handleEdit}
        color="primary"
        variant="outlined"
        size="small"
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
    </div>
  );
};

export default MovieCard;
