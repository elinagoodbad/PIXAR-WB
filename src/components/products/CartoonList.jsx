// 111111вот это
// import React, { useState, useEffect } from "react";
// import CartoonCard from "../products/CartoonCard";
// import Deteil from "../products/Deteil";
// import PaginationControlled from "../products/Pagination";
// import { API_CARTOONS } from "../../helpers/const";

// const CartoonList = () => {
//   const [cartoons, setCartoons] = useState([]);
//   const [selectedCartoon, setSelectedCartoon] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cartoonsPerPage = 3; // Показываем 3 карточки за раз

//   useEffect(() => {
//     const fetchCartoons = async () => {
//       try {
//         const response = await fetch(API_CARTOONS);
//         const data = await response.json();
//         setCartoons(data);
//       } catch (error) {
//         console.error("Error fetching cartoons:", error);
//       }
//     };

//     fetchCartoons();
//   }, []);

//   const totalPages = Math.ceil(cartoons.length / cartoonsPerPage);
//   const startIndex = (currentPage - 1) * cartoonsPerPage;
//   const currentCartoons = cartoons.slice(
//     startIndex,
//     startIndex + cartoonsPerPage
//   );

//   const handleOpenModal = (cartoon) => {
//     setSelectedCartoon(cartoon);
//   };

//   const handleCloseModal = () => {
//     setSelectedCartoon(null);
//   };

//   return (
//     <div className="movie-page-container">
//       <div className="movie-cards-container">
//         {currentCartoons.map((cartoon, index) => (
//           <CartoonCard
//             key={index}
//             cartoon={cartoon}
//             onOpenModal={handleOpenModal}
//           />
//         ))}
//       </div>

//       {selectedCartoon && (
//         <Deteil movie={selectedCartoon} handleCloseModal={handleCloseModal} />
//       )}

//       <div className="pagination-position">
//         <PaginationControlled
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default CartoonList;
//?
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./CartoonCard.modal.css"; // Обновленные стили для CartoonCard
// import { Button } from "@mui/material"; // Обновляем импорт кнопок на MUI

// const CartoonCard = ({ cartoon, onOpenModal, onDelete }) => {
//   const navigate = useNavigate(); // Хук для навигации

//   const handleEdit = () => {
//     navigate(`/edit/${cartoon.id}`); // Перенаправление на страницу редактирования мультфильма
//   };
//   const handleOpenModal = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovie(null);
//   };
//   return (
//     <div className="cartoon-card">
//       <Link to={`/cartoons/${cartoon.title}`}>
//         <img
//           src={cartoon.image}
//           alt={cartoon.title}
//           className="cartoon-image"
//         />
//       </Link>
//       <h2 className="cartoon-title">{cartoon.title}</h2>
//       <div className="button-container">
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           onClick={() => onOpenModal(cartoon)} // Открытие модального окна при клике на кнопку
//         >
//           MORE
//         </Button>
//         <Button
//           color="error" // Обновляем цвет на красный для удаления
//           variant="outlined"
//           size="medium"
//           onClick={() => onDelete(cartoon.id)} // Вызов функции удаления
//         >
//           Delete
//         </Button>
//         <Button
//           onClick={handleEdit}
//           color="primary" // Обновляем цвет на синий для редактирования
//           variant="outlined"
//           size="medium"
//         >
//           Edit
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default CartoonCard;
//!
import React, { useState, useEffect } from "react";
import CartoonCard from "../products/CartoonCard";
import Deteil from "../products/Deteil";
import PaginationControlled from "../products/Pagination";
import { API_CARTOONS } from "../../helpers/const";
// import "./CartoonList.css";

const CartoonList = () => {
  const [cartoons, setCartoons] = useState([]);
  const [selectedCartoon, setSelectedCartoon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cartoonsPerPage = 9;

  useEffect(() => {
    const fetchCartoons = async () => {
      try {
        const response = await fetch(API_CARTOONS);
        const data = await response.json();
        setCartoons(data);
      } catch (error) {
        console.error("Error fetching cartoons:", error);
      }
    };

    fetchCartoons();
  }, []);

  const totalPages = Math.ceil(cartoons.length / cartoonsPerPage);
  const startIndex = (currentPage - 1) * cartoonsPerPage;
  const currentCartoons = cartoons.slice(
    startIndex,
    startIndex + cartoonsPerPage
  );

  const handleOpenModal = (cartoon) => {
    setSelectedCartoon(cartoon);
  };

  const handleCloseModal = () => {
    setSelectedCartoon(null);
  };

  return (
    <div className="movie-page-container">
      <div className="movie-cards-container">
        {currentCartoons.map((cartoon, index) => (
          <CartoonCard
            key={index}
            cartoon={cartoon}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {selectedCartoon && (
        <Deteil movie={selectedCartoon} handleCloseModal={handleCloseModal} />
      )}

      <div className="pagination-position">
        <PaginationControlled
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default CartoonList;
