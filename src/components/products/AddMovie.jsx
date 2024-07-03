// import React, { useState } from "react";
// import { useMovie } from "../../context/MovieContextProvider";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import CategorySelect from "./CategorySelect";

// const AddMovie = () => {
//   const { createMovie } = useMovie();
//   const [movie, setMovie] = useState({
//     title: "",
//     description: "",
//     image: "",
//     genre: "",
//     year: 0,
//     categoty: "",
//   });
//   const handleInput = (e) => {
//     if (e.target.name === "year") {
//       const obj = {
//         ...movie,
//         [e.target.name]: Number(e.target.value),
//       };
//       setMovie(obj);
//     } else {
//       const obj = {
//         ...movie,
//         [e.target.name]: e.target.value,
//       };
//       setMovie(obj);
//     }
//   };
//   const handleClick = () => {
//     createMovie(movie);
//   };
//   return (
//     <Box
//       sx={{
//         width: "50vw",
//         height: "500",
//         margin: "20px auto",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//     >
//       <Typography variant="h4" align="center">
//         Admin
//       </Typography>
//       <TextField
//         name="title"
//         fullWidth
//         label="Title"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="description"
//         fullWidth
//         label="Description"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="image"
//         fullWidth
//         label="Image"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="genre"
//         fullWidth
//         label="Genre"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <TextField
//         name="year"
//         fullWidth
//         label="Year"
//         variant="outlined"
//         onChange={handleInput}
//       />
//       <CategorySelect handleInput={handleInput} />
//       <Button onClick={handleClick} fullWidth variant="contained">
//         Add Movie
//       </Button>
//     </Box>
//   );
// };

// export default AddMovie;
//!
import React, { useState } from "react";
import { useMovie } from "../../context/MovieContextProvider";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";
import "./AddMovie.css";

const AddMovie = () => {
  const { createMovie, createCartoon } = useMovie();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    image: "",
    genre: "",
    year: "",
    rating: "",
    bannerImage: "",
    price: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    pic7: "",
    pic8: "",
    trailer1Image: "",
    trailer1Link: "",
    trailer2Image: "",
    trailer2Link: "",
    category: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]:
        name === "year"
          ? Number(value)
          : name === "price"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setMovie((prev) => ({
      ...prev,
      category,
    }));
  };

  const handleClick = () => {
    console.log(
      `Adding ${movie.category === "Cartoons" ? "Cartoon" : "Movie"}`
    ); // Для отладки
    if (movie.category === "Cartoons") {
      createCartoon(movie);
    } else {
      createMovie(movie);
    }
  };

  return (
    <div className="admin">
      <Box sx={{ width: "100%", marginTop: 2 }}>
        <Typography variant="h4" align="center" marginBottom={2}>
          Add {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="title"
              fullWidth
              label="Title"
              variant="outlined"
              value={movie.title}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="description"
              fullWidth
              label="Description"
              variant="outlined"
              value={movie.description}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="image"
              fullWidth
              label="Image"
              variant="outlined"
              value={movie.image}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="year"
              fullWidth
              label="Year"
              variant="outlined"
              value={movie.year}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="rating"
              fullWidth
              label="Rating"
              variant="outlined"
              value={movie.rating}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="bannerImage"
              fullWidth
              label="Banner Image"
              variant="outlined"
              value={movie.bannerImage}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="price"
              fullWidth
              label="Price"
              variant="outlined"
              value={movie.price}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic1"
              fullWidth
              label="Picture 1"
              variant="outlined"
              value={movie.pic1}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic2"
              fullWidth
              label="Picture 2"
              variant="outlined"
              value={movie.pic2}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic3"
              fullWidth
              label="Picture 3"
              variant="outlined"
              value={movie.pic3}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic4"
              fullWidth
              label="Picture 4"
              variant="outlined"
              value={movie.pic4}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic5"
              fullWidth
              label="Picture 5"
              variant="outlined"
              value={movie.pic5}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic6"
              fullWidth
              label="Picture 6"
              variant="outlined"
              value={movie.pic6}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic7"
              fullWidth
              label="Picture 7"
              variant="outlined"
              value={movie.pic7}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pic8"
              fullWidth
              label="Picture 8"
              variant="outlined"
              value={movie.pic8}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="trailer1Image"
              fullWidth
              label="Trailer 1 Image"
              variant="outlined"
              value={movie.trailer1Image}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="trailer1Link"
              fullWidth
              label="Trailer 1 Link"
              variant="outlined"
              value={movie.trailer1Link}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="trailer2Image"
              fullWidth
              label="Trailer 2 Image"
              variant="outlined"
              value={movie.trailer2Image}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="trailer2Link"
              fullWidth
              label="Trailer 2 Link"
              variant="outlined"
              value={movie.trailer2Link}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="genre"
              fullWidth
              label="Genre"
              variant="outlined"
              value={movie.genre}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <CategorySelect handleC />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleClick}
              fullWidth
              variant="contained"
              sx={{ marginTop: 2 }}
            >
              Add {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddMovie;
