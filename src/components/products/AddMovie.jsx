import React, { useState } from "react";
import { useMovie } from "../../context/MovieContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddMovie = () => {
  const { createMovie } = useMovie();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    image: "",
    genre: "",
    year: 0,
    categoty: "",
  });
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
    createMovie(movie);
  };
  return (
    <Box
      sx={{
        width: "50vw",
        height: "500",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        Admin
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="genre"
        fullWidth
        label="Genre"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="year"
        fullWidth
        label="Year"
        variant="outlined"
        onChange={handleInput}
      />
      <CategorySelect handleInput={handleInput} />
      <Button onClick={handleClick} fullWidth variant="contained">
        Add Movie
      </Button>
    </Box>
  );
};

export default AddMovie;
