// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./CartoonCard.modal.css"; // Обновленные стили для CartoonCard
// import { Button } from "@mui/material"; // Обновляем импорт кнопок на MUI

// const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
//   const navigate = useNavigate(); // Хук для навигации

//   const handleEdit = () => {
//     navigate(`/edit/${cartoon.id}`); // Перенаправление на страницу редактирования мультфильма
//   };

//   return (
//     <div className="cartoon-card">
//       <Link to={`/cartoons/${cartoon.title}`}>
//         <img
//           src={cartoon.image}
//           alt={cartoon.title}
//           className="cartoon-image"
//           onClick={() => onOpenModal(cartoon)} // Открытие модального окна при клике на изображение
//         />
//       </Link>
//       <h2 className="cartoon-title">{cartoon.title}</h2>
//       <button className="details-button" onClick={() => onOpenModal(cartoon)}>
//         MORE
//       </button>
//       <Button
//         color="error" // Обновляем цвет на красный для удаления
//         variant="outlined"
//         size="medium"
//         onClick={() => onDelete(cartoon.id)} // Вызов функции удаления
//       >
//         Delete
//       </Button>
//       <Button
//         onClick={handleEdit}
//         color="primary" // Обновляем цвет на синий для редактирования
//         variant="outlined"
//         size="medium"
//       >
//         Edit
//       </Button>
//     </div>
//   );
// };

// export default CartoonCard;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CartoonCard.modal.css";
import { Button } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${cartoon.id}`);
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
      <Button
        className="details-button"
        onClick={() => onOpenModal(cartoon)}
        variant="contained"
      >
        MORE
      </Button>
      <Button
        color="error"
        variant="outlined"
        size="small"
        onClick={() => onDelete(cartoon.id)}
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

export default CartoonCard;
