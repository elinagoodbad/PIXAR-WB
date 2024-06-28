import React, { useState } from "react";
import "./NewMovie.css";
import Deteil from "../products/Deteil";
import PaginationControlled from "../products/Pagination";
import { Link } from "react-router-dom";

const moviesData = [
  {
    title: "The Color Purple",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjBkNGE0NGYtYmU5Ny00NjRiLTk5MmYtMWU4NzYxMDE4YWY4XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    year: "1985",
    description: "Own it Today",
    genre: "Drama",
    rating: "7.8",
  },
  {
    title: "Just Mercy",
    image:
      "https://m.media-amazon.com/images/I/71O7GI5bT6L._AC_UF1000,1000_QL80_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "42",
    image: "https://upload.wikimedia.org/wikipedia/ru/3/31/42_%28film%29.jpg",
    year: "2013",
    description: "Own it Today",
    genre: "Biography",
    rating: "7.5",
  },
  {
    title: "The Little Things",
    image:
      "https://play-lh.googleusercontent.com/913sxysZQ8SRNhn9SYzdpZ7k2RURYrneAT6ekCT8d2n2eKp3PgzR6ifYKO6InXSplLNnmEE9GIuwwddm6Q8",
    year: "2021",
    description: "Own it Today",
    genre: "Crime",
    rating: "6.3",
  },
  {
    title: "Roots: The Complete",
    image:
      "https://m.media-amazon.com/images/I/71rKsE5+ldL._AC_UF1000,1000_QL80_.jpg",
    year: "1977",
    description: "Own it Today",
    genre: "Drama",
    rating: "8.4",
  },
  {
    title: "Friday",
    image:
      "https://images.moviesanywhere.com/0f0eda9096f7023c33fae1fcd0ac17b2/69c9fa37-d4e7-44be-ab72-bea656ab4958.jpg",
    year: "1995",
    description: "Own it Today",
    genre: "Comedy",
    rating: "7.3",
  },
  {
    title: "All American: Season 1",
    image: "https://i.scdn.co/image/ab67616d0000b2737acfed4cd5abacec5e16a9c8",
    year: "2018",
    description: "Own it Today",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "All American: Season 2",
    image: "https://upload.wikimedia.org/wikipedia/ru/1/18/All_American_s2.jpg",
    year: "2019",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "All American: Season 3",
    image:
      "https://resizing.flixster.com/pzsEfyPd8RdVFtp_QZv1SeUTPHY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjc5OTkzMy53ZWJw",
    year: "2020",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "All American: Season 4",
    image:
      "https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fseries%2F348200%2Fposters%2F602d506405fed.jpg&w=640&q=75",
    year: "2021",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "All American: Season 5",
    image:
      "https://serialy-2022.com/uploads/posts/2024-04/medium/1712591996_nastoyaschiy-amerikanec.jpg",
    year: "2022",
    description: "Watch on The CW and Netflix",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "Judas and the Black Messiah",
    image:
      "https://irs.www.warnerbros.com/keyart-png/movies/media/browser/judas_and_the_black_messiah_red_clean_2000x3000.png",
    year: "2021",
    description: "Own it Today",
    genre: "Biography",
    rating: "7.5",
  },
  {
    title: "All American: Homecoming",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDViOWU2MzQtOTdhMy00ZTg2LTg3ZjctNzc4M2I5NWI0OGQ0XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg",
    year: "2022",
    description: "Own it Today",
    genre: "Drama",
    rating: "7.6",
  },
  {
    title: "All Of Us",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWosd6lPjgAvBa8jzdfe1ElkzoOci2MeKwQ&s",
    year: "2003-2023",
    description: "Own it Today",
    genre: "Comedy",
    rating: "6.8",
  },
  {
    title: "Abbott Elementary: Season 1",
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20001979_b_v13_ac.jpg",
    year: "2021",
    description: "Available on Digital Now",
    genre: "Comedy",
    rating: "8.2",
  },
  {
    title: "The Apollo",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDM2ZjdmOTItODg2My00N2YyLWE1MTktYWM4YTVlNmI4YjkyXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg",
    year: "1985",
    description: "Own it Today",
    genre: "Documentary",
    rating: "7.4",
  },
  {
    title: "ATL",
    image:
      "https://m.media-amazon.com/images/I/51vL2xskbxL._AC_UF1000,1000_QL80_.jpg",
    year: "2006",
    description: "Own it Today",
    genre: "Drama",
    rating: "6.1",
  },
  {
    title: "A Black Lady Sketch Show",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzk0NzI2YmQtNzU0YS00MTFkLWFhYWYtMTlmZjE3MDA1ODlkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: "2019",
    description: "Available on Digital Now",
    genre: "Comedy",
    rating: "7.1",
  },
  {
    title: "Ballers",
    image:
      "https://m.media-amazon.com/images/I/819WNS8icRL._AC_UF894,1000_QL80_.jpg",
    year: "2015",
    description: "Own it Today",
    genre: "Comedy",
    rating: "7.6",
  },
  {
    title: "Batwoman",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWJiZjUzNzQtMmI3NS00ZDUxLWFlYWQtMjVkNzU2YWM0YjBlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Action",
    rating: "3.4",
  },
  {
    title: "Between the World and Me",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTU1NDFhYjYtN2JjOC00OTg0LTgzMzctNzZjMjE2OWI3NmI3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    year: "2020",
    description: "Own it Today",
    genre: "Documentary",
    rating: "7.1",
  },
  {
    title: "The Big Bang Theory",
    image: "https://www.aceprensa.com/wp-content/uploads/2019/07/1418-1.jpg",
    year: "2007-2019",
    description: "Own it Today",
    genre: "Comedy",
    rating: "8.2",
  },
  {
    title: "Black-ish",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzYwNmQwZGItNzdmNy00Y2ZkLWIxYzUtNDY3ZGIyYzY2M2MzXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
    year: "2014",
    description: "Own it Today",
    genre: "Comedy",
    rating: "7.3",
  },
  {
    title: "Black Lightning",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTU0MGU1MDAtZTI5MS00YjAzLWE3MDAtNWUzMjFlYTdiMzIzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    year: "2018-2021",
    description: "Own it Today",
    genre: "Action",
    rating: "6.1",
  },
  {
    title: "Blindspot",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDIyYzUwNjgtNDA1Mi00ZmQ3LThhNWQtN2RjZjczNjRlZmQ3XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_FMjpg_UX1000_.jpg",
    year: "2015-2020",
    description: "Own it Today",
    genre: "Action",
    rating: "7.3",
  },
  {
    title: "Boondocks",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWEwOGEzMTYtNTljZS00M2Q2LTgyNzEtMTcwMmVkZWIwNmRmXkEyXkFqcGdeQXVyMTE0NzY5OTk5._V1_.jpg",
    year: "2005-2014",
    description: "Own it Today",
    genre: "Comedy",
    rating: "8.4",
  },

  {
    title: "The Carmichael Show",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDkwMTMyYWQtMTRjYS00OWU3LTgzOWUtMzYwMTIxM2I5YjA2XkEyXkFqcGdeQXVyNjMxNzcwOTI@._V1_FMjpg_UX1000_.jpg",
    year: "2015",
    description: "Own it Today",
    genre: "Comedy",
    rating: "7.6",
  },
  {
    title: "Chadwick Boseman: A Tribute for a King",
    image:
      "https://images.justwatch.com/poster/204450326/s718/chadwick-boseman-a-tribute-for-a-king.jpg",
    year: "2020",
    description: "Own it Today",
    genre: "Documentary",
    rating: "7.5",
  },
  {
    title: "The Closer",
    image:
      "https://m.media-amazon.com/images/M/MV5BODg5MTc0MTg3OV5BMl5BanBnXkFtZTcwNTUwNjAzMQ@@._V1_.jpg",
    year: "2005",
    description: "Own it Today",
    genre: "Crime",
    rating: "7.4",
  },
  {
    title: "Crazy Rich Asians",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
    year: "2018",
    description: "Own it Today",
    genre: "Comedy",
    rating: "6.9",
  },
  {
    title: "David Makes Man",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTEzNjUwOTU2MTheQTJeQWpwZ15BbWU4MDkxMzA5Mjcz._V1_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Drama",
    rating: "7.7",
  },
  {
    title: "DC’s Legends of Tomorrow",
    image: "https://static.tvtropes.org/pmwiki/pub/images/lots2s.png",
    year: "2016",
    description: "Own it Today",
    genre: "Action",
    rating: "6.8",
  },
  {
    title: "The Doomsday Clock: The Complete",
    image:
      "https://m.media-amazon.com/images/I/81sDMZwV77L._AC_UF1000,1000_QL80_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Drama",
    rating: "8.3",
  },
  {
    title: "Doom Patrol",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjY1NDE5YWQtMDMyNS00M2M2LWE3MWItMjA5Y2UxOWVkNmM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Action",
    rating: "7.9",
  },
  {
    title: "East New York",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjczNzJlM2MtNTMwNy00MDJhLWE3ZjItZTI2MGM5NjAxY2FlXkEyXkFqcGdeQXVyMTU2Mjg2NjE2._V1_.jpg",
    year: "2022",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "7.5",
  },
  {
    title: "Equal",
    image:
      "https://resizing.flixster.com/U9xZCNI4eE4NWeZR_V4LlOxipJc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12607594_v_v8_an.jpg",
    year: "2020",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "6.9",
  },
  {
    title: "Euphoria",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    year: "2019",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "8.4",
  },
  {
    title: "Harriet",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmE1Y2JjMDEtZDAyOC00NjFiLWJlNjAtMjA3MDMzZGUxMDViXkEyXkFqcGdeQXVyMTA2MDQ3MTQ3._V1_FMjpg_UX1000_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Biography",
    rating: "6.7",
  },
  {
    title: "His Dark Materials",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2FlYzgyZDYtYzI0ZS00YThiLTg4N2EtNmViMDdmMTcyNWU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    year: "2019",
    description: "Own it Today",
    genre: "Adventure",
    rating: "7.9",
  },
  {
    title: "In Treatment",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjM4NzMzMDI1NF5BMl5BanBnXkFtZTcwOTE2MTMwNA@@._V1_.jpg",
    year: "2008-2021",
    description: "Own it Today",
    genre: "Drama",
    rating: "8.3",
  },
  {
    title: "Key & Peele",
    image:
      "https://images.paramount.tech/uri/mgid:arc:imageassetref:comedycentral.com:331a611a-fd48-4bbc-83d0-b6e5aabbbc0f?quality=0.7&gen=ntrn",
    year: "2012",
    description: "Own it Today",
    genre: "Comedy",
    rating: "8.3",
  },
  {
    title: "Lovecraft Country",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDliM2ZhZWMtM2YwMy00NjAzLTk1YmEtODJmZDhhMTIxOGRmXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_FMjpg_UX1000_.jpg",
    year: "2020",
    description: "Available on Digital Now",
    genre: "Drama",
    rating: "7.2",
  },
  {
    title: "Malcolm X",
    image:
      "https://resizing.flixster.com/DKUR22c5R_n93qJpv_2X9sU_7LM=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14384_p_v8_ac.jpg",
    year: "1992",
    description: "Own it Today",
    genre: "Biography",
    rating: "7.7",
  },
];

const NewMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 18;
  const totalPages = Math.ceil(moviesData.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = moviesData.slice(
    startIndex,
    startIndex + moviesPerPage
  );

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-page-container">
      <div className="hero-banner">
        {/* <img
          src="https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/key_art/hero.jpg"
          alt="Hero Banner"
        /> */}
        <div className="hero-text">
          <h1>Welcome to Warner Bros.</h1>
          <p>Your favorite movies and TV shows all in one place.</p>
        </div>
      </div>
      <div className="hero-text2">
        <h1> |COMING SOON TO THEATERS</h1>
      </div>
      <div className="movie-card-container">
        {currentMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div
              className="movie-card-inner"
              // onClick={() => handleOpenModal(movie)}
            >
              {/* <img
                src={movie.image}
                alt={movie.title}
                className="movie-image"
                onClick={() => handleOpenModal(movie)}
              /> */}
              <Link to={`/movie/${movie.title}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="movie-image"
                />
              </Link>
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <span>{movie.year}</span>
                <p className="movie-description">{movie.description}</p>
                <button
                  className="details-button"
                  onClick={() => handleOpenModal(movie)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {selectedMovie && (
          <Deteil movie={selectedMovie} handleCloseModal={handleCloseModal} />
        )}

        <div className="pagination-position">
          {" "}
          <PaginationControlled
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
