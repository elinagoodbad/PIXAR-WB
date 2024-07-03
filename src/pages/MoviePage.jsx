import React from "react";
import MovieList from "../components/products/MovieList";
import Parallax from "../components/products/Parallax";
import ParallaxMovie from "../components/products/ParallaxMovie";
// import CarouselComponent from "../components/products/CarouselComponent";

const MoviePage = () => {
  return (
    <div className="movie-page">
      <div className="banner-movie-page">
        <ParallaxMovie />
      </div>
      <MovieList />
      <div className="additional-banner">
        <img
          src="https://xage.ru/media/uploads/2017/01/kong_skull_island_01.jpg"
          alt="Additional Banner"
        />
      </div>
    </div>
  );
};

export default MoviePage;
