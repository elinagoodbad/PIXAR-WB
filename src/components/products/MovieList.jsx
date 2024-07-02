// import React, { useState, useEffect } from "react";
// import MovieCard from "../products/MovieCard";

// import PaginationControlled from "../products/Pagination";
// import { API_MOVIES } from "../../helpers/const";
// import Deteil from "./Deteil";

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const moviesPerPage = 3; // Показываем 3 карточки за раз

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(API_MOVIES);
//         const data = await response.json();
//         setMovies(data);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const totalPages = Math.ceil(movies.length / moviesPerPage);
//   const startIndex = (currentPage - 1) * moviesPerPage;
//   const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

//   const handleOpenModal = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <div className="movie-page-container">
//       <div className="movie-cards-container">
//         {currentMovies.map((movie, index) => (
//           <MovieCard key={index} movie={movie} onOpenModal={handleOpenModal} />
//         ))}
//       </div>

//       {selectedMovie && (
//         <Deteil movie={selectedMovie} handleCloseModal={handleCloseModal} />
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

// export default MovieList;
import React, { useState, useEffect } from "react";
import MovieCard from "../products/MovieCard";
import PaginationControlled from "../products/Pagination";
import { API_MOVIES } from "../../helpers/const";
import Deteil from "./Deteil";
import "./MovieList.css"; // Импорт стилей для MovieList

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3; // Показываем 3 карточки за раз

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_MOVIES);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-list-container">
      <div className="movie-cards-container">
        {currentMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onOpenModal={handleOpenModal} />
        ))}
      </div>

      {selectedMovie && (
        <Deteil movie={selectedMovie} handleCloseModal={handleCloseModal} />
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

export default MovieList;
