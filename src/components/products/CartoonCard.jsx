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

//       {user.email == ADMIN ? (
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
//       ) : (
//         <button className="details-button" onClick={() => onOpenModal(cartoon)}>
//         MORE
//       </button>
//       )}
//     </div>
//   );
// };

// export default CartoonCard;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./CartoonCard.modal.css";
// import { Button } from "@mui/material";
// import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";

// const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
//   const navigate = useNavigate();

//   const handleEdit = () => {
//     navigate(`/edit/${cartoon.id}`);
//   };

//   return (
//     <div className="cartoon-card">
//       <Link to={`/cartoons/${cartoon.title}`}>
//         <img
//           src={cartoon.image}
//           alt={cartoon.title}
//           className="cartoon-image"
//           onClick={() => onOpenModal(cartoon)}
//         />
//       </Link>
//       <h2 className="cartoon-title">{cartoon.title}</h2>

//       {user.email == ADMIN ? (
//       <Button
//         color="error"
//         variant="outlined"
//         size="small"
//         onClick={() => onDelete(cartoon.id)}
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
//         ) : (
//           <Button
//           className="details-button"
//           onClick={() => onOpenModal(cartoon)}
//           variant="contained"
//         >
//           MORE
//         </Button>
//         )}
//     </div>
//   );
// };

// export default CartoonCard;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
// import { useAuth } from "../../context/AuthContextProvider";
// import { ADMIN } from "../../helpers/const";

// import "./CartoonCard.modal.css"; // Обновленные стили для CartoonCard
// import Deteil from "./Deteil";

// const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const { user } = useAuth();

//   const handleEdit = () => {
//     navigate(`/edit/${cartoon.id}`);
//   };

//   return (
//     <Card
//       sx={{
//         height: 650,
//         boxShadow: "none",
//         margin: "25px",
//         width: { md: "30vw", lg: "19vw" },
//         backgroundColor: "#f9f9f9",
//         borderRadius: 4,
//         border: "1px solid #ddd",
//       }}
//     >
//       <CardActionArea onClick={handleOpen}>
//         <CardMedia
//           sx={{ height: 240, borderRadius: 4, border: "2px solid black" }}
//           image={cartoon.image}
//         />
//       </CardActionArea>
//       <CardContent
//         sx={{
//           padding: "20px 5px 0px 5px",
//           display: "flex",
//           height: 300,
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography variant="h5" fontSize="20" fontWeight={700} component="div">
//           {cartoon.title}
//         </Typography>
//         <Typography color="gray" fontSize="14px">
//           {cartoon.description}
//         </Typography>
//         {user && user.email === ADMIN ? (
//           <>
//             <Button
//               color="error"
//               variant="outlined"
//               size="medium"
//               onClick={() => onDelete(cartoon.id)}
//               startIcon={<DeleteIcon />}
//             >
//               Delete
//             </Button>
//             {/* <Button
//               onClick={handleEdit}
//               color="primary"
//               variant="outlined"
//               size="medium"
//               startIcon={<EditIcon />}
//             >
//               Edit
//             </Button> */}
//           </>
//         ) : (
//           <Button
//             className="details-button"
//             onClick={() => onOpenModal(cartoon)}
//             variant="contained"
//           >
//             MORE
//           </Button>
//         )}
//       </CardContent>
//       <Deteil elem={cartoon} open={open} handleClose={handleClose} />
//     </Card>
//   );
// };

// export default CartoonCard;
//!doneeee
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material"; // Обновляем импорт кнопок на MUI
// import { useAuth } from "../../context/AuthContextProvider"; // Импортируем useAuth
// import { ADMIN } from "../../helpers/const"; // Импортируем ADMIN константу
// import "./CartoonCard.modal.css"; // Обновленные стили для CartoonCard

// const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
//   const navigate = useNavigate(); // Хук для навигации
//   const { user } = useAuth(); // Используем useAuth для доступа к user объекту

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

//       {user && user.email === ADMIN ? (
//         <>
//           <Button
//             color="error" // Обновляем цвет на красный для удаления
//             variant="outlined"
//             size="medium"
//             onClick={() => onDelete(cartoon.id)} // Вызов функции удаления
//           >
//             Delete
//           </Button>
//           <Button
//             onClick={handleEdit}
//             color="primary" // Обновляем цвет на синий для редактирования
//             variant="outlined"
//             size="medium"
//           >
//             Edit
//           </Button>
//         </>
//       ) : (
//         <button className="details-button" onClick={() => onOpenModal(cartoon)}>
//           MORE
//         </button>
//       )}
//     </div>
//   );
// };

// export default CartoonCard;
//!
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContextProvider";
import { ADMIN } from "../../helpers/const";
import "./CartoonCard.modal.css";

const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

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
      <div className="button-group">
        {user && user.email === ADMIN ? (
          <>
            <Button
              className="custom-button more-button"
              onClick={() => onOpenModal(cartoon)}
              color="primary"
              variant="contained"
              size="medium"
            >
              MORE
            </Button>
            <Button
              className="custom-button"
              color="error"
              variant="contained"
              size="medium"
              onClick={() => onDelete(cartoon.id)}
              startIcon={<DeleteIcon />}
            />
            <Button
              className="custom-button"
              onClick={handleEdit}
              color="primary"
              variant="contained"
              size="medium"
              startIcon={<EditIcon />}
            />
          </>
        ) : (
          <Button
            className="custom-button more-button"
            onClick={() => onOpenModal(cartoon)}
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

export default CartoonCard;
