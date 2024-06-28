import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../context/MovieContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditMovie = () => {
  const { id } = useParams();
  const { oneMovie, getOneMovie, editMovie } = useMovie();

  useEffect(() => {
    getOneMovie(id);
  }, []);

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    year: 0,
    image: "",
    genre: "",
  });

  useEffect(() => {
    setMovie(oneMovie);
  }, [oneMovie]);

  const handleInput = (e) => {
    if (e.target.name === "year") {
      const obj = {
        ...movie,
        [e.target.name]: Number(e.target.value),
      };
      setMovie(obj);
    } else {
      const obj = {
        ...movie,
        [e.target.name]: e.target.value,
      };
      setMovie(obj);
    }
  };
  const handleClick = () => {
    editMovie(id, movie);
  };
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
        value={movie.title}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={movie.description}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        onChange={handleInput}
        value={movie.image}
      />
      <TextField
        name="genre"
        fullWidth
        label="Genre"
        variant="outlined"
        onChange={handleInput}
        value={movie.genre}
      />
      <TextField
        name="year"
        fullWidth
        label="Year"
        variant="outlined"
        onChange={handleInput}
        value={movie.year}
      />
      <Button onClick={handleClick} fullWidth variant="contained">
        Edit Movie
      </Button>
    </Box>
  );
};

export default EditMovie;
