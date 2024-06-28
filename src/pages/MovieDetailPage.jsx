import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../components/products/MoviesData";
import "./MovieDetailPage.css";
import bgWB from "./assets/bgWB.jpg";

const MovieDetailPage = () => {
  const { title } = useParams();
  const movie = moviesData.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-page">
      <div className="banner">
        {/* <img src={bgWB} alt={movie.title} className="banner-image" /> */}
        <img src={movie.image} alt={movie.title} className="banner-image" />
        <div className="banner-overlay">
          <h1 className="movie-title"> | {movie.title}</h1>
        </div>
      </div>
      <div className="movie-watch">
        <h2> | WATCH IT |</h2>
        <h2>Watch On Digital</h2>
        <img
          style={{ marginTop: "100px", width: "100px" }}
          src="https://assets.www.warnerbros.com/drupal-root/public/youtube_retailer.jpg"
          alt=""
        />
      </div>
      <div className="movie-detail-content">
        <img src={movie.image} alt={movie.title} className="banner-image" />
        <div className="movie-additional-info">
          <h2>ABOUT</h2>
          <p>{movie.about}</p>
        </div>
        <div className="movie-detail-info">
          <h2>Overview</h2>
          <p>{movie.description}</p>
          <p>
            <strong>Year:</strong> {movie.year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
