import React, { useState, useEffect } from "react";
import CartoonCard from "./CartoonCard";
import PaginationControlled from "./Pagination";
import { API_CARTOONS } from "../../helpers/const";
import { useAuth } from "../../context/AuthContextProvider";
import Deteil from "./Deteil";
import FilterProduct from "./FilterProduct";

const CartoonList = () => {
  const [cartoons, setCartoons] = useState([]);
  const [selectedCartoon, setSelectedCartoon] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cartoonsPerPage = 3;
  const { user } = useAuth();

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
      <FilterProduct />
      <div className="movie-cards-container">
        {currentCartoons.map((cartoon) => (
          <CartoonCard
            key={cartoon.id}
            cartoon={cartoon}
            onOpenModal={handleOpenModal}
            onDelete={(id) => setCartoons(cartoons.filter((c) => c.id !== id))}
            user={user}
          />
        ))}
      </div>

      {selectedCartoon && (
        <Deteil cartoon={selectedCartoon} handleCloseModal={handleCloseModal} />
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
