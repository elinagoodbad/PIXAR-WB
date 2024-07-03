// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./MovieCard.modal.css"; // Импорт стилей для MovieCard
// // import { Button } from "@mui/material";
// // import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

// // const MovieCard = ({ movie, onOpenModal, onDelete }) => {
// //   const navigate = useNavigate(); // Хук для навигации

// //   const handleEdit = () => {
// //     navigate(`/edit/${movie.id}`); // Перенаправление на страницу редактирования фильма
// //   };

// //   return (
// //     <div className="movie-card">
// //       <Link to={`/movies/${movie.title}`}>
// //         <img
// //           src={movie.image}
// //           alt={movie.title}
// //           className="movie-image"
// //           onClick={() => onOpenModal(movie)} // Open modal on image click
// //         />
// //       </Link>
// //       <h2 className="movie-title">{movie.title}</h2>
// //       <Button
// //         className="details-button"
// //         onClick={() => onOpenModal(movie)}
// //         variant="contained"
// //       >
// //         MORE
// //       </Button>
// //       <Button
// //         color="error"
// //         variant="outlined"
// //         size="small"
// //         onClick={() => onDelete(movie.id)} // Вызов функции удаления
// //         startIcon={<DeleteIcon />}
// //       >
// //         Delete
// //       </Button>
// //       <Button
// //         onClick={handleEdit}
// //         color="primary"
// //         variant="outlined"
// //         size="small"
// //         startIcon={<EditIcon />}
// //       >
// //         Edit
// //       </Button>
// //     </div>
// //   );
// // };

// // export default MovieCard;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./MovieCard.modal.css";
// import { Button } from "@mui/material";
// import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

// const MovieCard = ({ movie, onOpenModal, onDelete }) => {
//   const navigate = useNavigate();

//   const handleEdit = () => {
//     navigate(`/edit/${movie.id}`);
//   };

//   return (
//     <div className="movie-card">
//       <Link to={`/movies/${movie.title}`}>
//         <img
//           src={movie.image}
//           alt={movie.title}
//           className="movie-image"
//           onClick={() => onOpenModal(movie)}
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
//         onClick={() => onDelete(movie.id)}
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
//!готовое рабочее
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
// import { useAuth } from "../../context/AuthContextProvider"; // Импортируем useAuth
// import { ADMIN } from "../../helpers/const"; // Импортируем ADMIN константу
// import "./MovieCard.modal.css"; // Обновленные стили для MovieCard

// const MovieCard = ({ movie, onOpenModal, onDelete }) => {
//   const navigate = useNavigate(); // Хук для навигации
//   const { user } = useAuth(); // Используем useAuth для доступа к user объекту

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
//           onClick={() => onOpenModal(movie)} // Открытие модального окна при клике на изображение
//         />
//       </Link>
//       <h2 className="movie-title">{movie.title}</h2>

//       {user && user.email === ADMIN ? (
//         <>
//           <Button
//             color="error" // Обновляем цвет на красный для удаления
//             variant="outlined"
//             size="medium"
//             onClick={() => onDelete(movie.id)} // Вызов функции удаления
//             startIcon={<DeleteIcon />}
//           >
//             Delete
//           </Button>
//           <Button
//             onClick={handleEdit}
//             color="primary" // Обновляем цвет на синий для редактирования
//             variant="outlined"
//             size="medium"
//             startIcon={<EditIcon />}
//           >
//             Edit
//           </Button>
//         </>
//       ) : (
//         <button className="details-button" onClick={() => onOpenModal(movie)}>
//           MORE
//         </button>
//       )}
//     </div>
//   );
// };

// export default MovieCard;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContextProvider"; // Импортируем useAuth
import { ADMIN } from "../../helpers/const"; // Импортируем ADMIN константу
import "./MovieCard.modal.css"; // Обновленные стили для MovieCard

const MovieCard = ({ movie, onOpenModal, onDelete }) => {
  const navigate = useNavigate(); // Хук для навигации
  const { user } = useAuth(); // Используем useAuth для доступа к user объекту

  const handleEdit = () => {
    navigate(`/edit/${movie.id}`); // Перенаправление на страницу редактирования фильма
  };

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.title}`}>
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-image"
          onClick={() => onOpenModal(movie)} // Открытие модального окна при клике на изображение
        />
      </Link>
      <h2 className="movie-title">{movie.title}</h2>
      <div className="button-group">
        {user && user.email === ADMIN ? (
          <>
            <Button
              className="custom-button"
              color="error" // Обновляем цвет на красный для удаления
              variant="contained"
              size="medium"
              onClick={() => onDelete(movie.id)} // Вызов функции удаления
              startIcon={<DeleteIcon />}
            />
            <Button
              className="custom-button"
              onClick={handleEdit}
              color="primary" // Обновляем цвет на синий для редактирования
              variant="contained"
              size="medium"
              startIcon={<EditIcon />}
            />
          </>
        ) : (
          <Button
            className="custom-button more-button"
            onClick={() => onOpenModal(movie)}
            color="primary"
            variant="contained"
            size="medium"
          >
            MORE
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
