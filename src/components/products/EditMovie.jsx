// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useMovie } from "../../context/MovieContextProvider";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import CategorySelect from "./CategorySelect";

// const EditMovie = () => {
//   const { id } = useParams();
//   const { oneMovie, getOneMovie, editMovie } = useMovie();
//   const [movie, setMovie] = useState({
//     title: "",
//     description: "",
//     image: "",
//     genre: "",
//     year: 0,
//     rating: "",
//     bannerImage: "",
//     price: "",
//     pic1: "",
//     pic2: "",
//     pic3: "",
//     pic4: "",
//     pic5: "",
//     pic6: "",
//     pic7: "",
//     pic8: "",
//     trailer1Image: "",
//     trailer1Link: "",
//     trailer2Image: "",
//     trailer2Link: "",
//     category: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     getOneMovie(id, "movie");
//   }, [id, getOneMovie]);

//   useEffect(() => {
//     setMovie(
//       oneMovie || {
//         title: "",
//         description: "",
//         image: "",
//         genre: "",
//         year: 0,
//         rating: "",
//         bannerImage: "",
//         price: "",
//         pic1: "",
//         pic2: "",
//         pic3: "",
//         pic4: "",
//         pic5: "",
//         pic6: "",
//         pic7: "",
//         pic8: "",
//         trailer1Image: "",
//         trailer1Link: "",
//         trailer2Image: "",
//         trailer2Link: "",
//         category: "",
//       }
//     );
//   }, [oneMovie]);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setMovie((prev) => ({
//       ...prev,
//       [name]:
//         name === "year"
//           ? Number(value)
//           : name === "price"
//           ? parseFloat(value)
//           : value,
//     }));
//   };

//   const handleCategoryChange = (category) => {
//     setMovie((prev) => ({
//       ...prev,
//       category,
//     }));
//   };

//   const handleSaveClick = () => {
//     editMovie(id, movie);
//     navigate(`/movies/${id}`); // Перенаправление на страницу фильма после сохранения
//   };

//   return (
//     <Box
//       sx={{
//         width: "50vw",
//         height: "auto",
//         margin: "20px auto",
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//         padding: "20px",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//       }}
//     >
//       <Typography variant="h4" align="center">
//         Edit {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
//       </Typography>
//       <TextField
//         name="title"
//         fullWidth
//         label="Title"
//         variant="outlined"
//         value={movie.title}
//         onChange={handleInput}
//       />
//       <TextField
//         name="description"
//         fullWidth
//         label="Description"
//         variant="outlined"
//         value={movie.description}
//         onChange={handleInput}
//       />
//       <TextField
//         name="image"
//         fullWidth
//         label="Image"
//         variant="outlined"
//         value={movie.image}
//         onChange={handleInput}
//       />
//       <TextField
//         name="year"
//         fullWidth
//         label="Year"
//         variant="outlined"
//         value={movie.year}
//         onChange={handleInput}
//       />
//       <TextField
//         name="rating"
//         fullWidth
//         label="Rating"
//         variant="outlined"
//         value={movie.rating}
//         onChange={handleInput}
//       />
//       <TextField
//         name="bannerImage"
//         fullWidth
//         label="Banner Image"
//         variant="outlined"
//         value={movie.bannerImage}
//         onChange={handleInput}
//       />
//       <TextField
//         name="price"
//         fullWidth
//         label="Price"
//         variant="outlined"
//         value={movie.price}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic1"
//         fullWidth
//         label="Picture 1"
//         variant="outlined"
//         value={movie.pic1}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic2"
//         fullWidth
//         label="Picture 2"
//         variant="outlined"
//         value={movie.pic2}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic3"
//         fullWidth
//         label="Picture 3"
//         variant="outlined"
//         value={movie.pic3}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic4"
//         fullWidth
//         label="Picture 4"
//         variant="outlined"
//         value={movie.pic4}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic5"
//         fullWidth
//         label="Picture 5"
//         variant="outlined"
//         value={movie.pic5}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic6"
//         fullWidth
//         label="Picture 6"
//         variant="outlined"
//         value={movie.pic6}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic7"
//         fullWidth
//         label="Picture 7"
//         variant="outlined"
//         value={movie.pic7}
//         onChange={handleInput}
//       />
//       <TextField
//         name="pic8"
//         fullWidth
//         label="Picture 8"
//         variant="outlined"
//         value={movie.pic8}
//         onChange={handleInput}
//       />
//       <TextField
//         name="trailer1Image"
//         fullWidth
//         label="Trailer 1 Image"
//         variant="outlined"
//         value={movie.trailer1Image}
//         onChange={handleInput}
//       />
//       <TextField
//         name="trailer1Link"
//         fullWidth
//         label="Trailer 1 Link"
//         variant="outlined"
//         value={movie.trailer1Link}
//         onChange={handleInput}
//       />
//       <TextField
//         name="trailer2Image"
//         fullWidth
//         label="Trailer 2 Image"
//         variant="outlined"
//         value={movie.trailer2Image}
//         onChange={handleInput}
//       />
//       <TextField
//         name="trailer2Link"
//         fullWidth
//         label="Trailer 2 Link"
//         variant="outlined"
//         value={movie.trailer2Link}
//         onChange={handleInput}
//       />
//       <TextField
//         name="genre"
//         fullWidth
//         label="Genre"
//         variant="outlined"
//         value={movie.genre}
//         onChange={handleInput}
//       />
//       <CategorySelect
//         handleCategoryChange={handleCategoryChange}
//         selectedCategory={movie.category}
//       />
//       <Button onClick={handleSaveClick} fullWidth variant="contained">
//         Save {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
//       </Button>
//     </Box>
//   );
// };

// export default EditMovie;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovie } from "../../context/MovieContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const EditMovie = () => {
  const { id } = useParams();
  const { oneMovie, getOneMovie, editMovie } = useMovie();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    image: "",
    genre: "",
    year: 0,
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
  const navigate = useNavigate();

  useEffect(() => {
    getOneMovie(id, "movie");
  }, [id, getOneMovie]);

  useEffect(() => {
    setMovie(
      oneMovie || {
        title: "",
        description: "",
        image: "",
        genre: "",
        year: 0,
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
      }
    );
  }, [oneMovie]);

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

  const handleSaveClick = () => {
    editMovie(id, movie);
    navigate(`/movies/${id}`);
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: "auto",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h4" align="center">
        Edit {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        value={movie.title}
        onChange={handleInput}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        value={movie.description}
        onChange={handleInput}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        value={movie.image}
        onChange={handleInput}
      />
      <TextField
        name="year"
        fullWidth
        label="Year"
        variant="outlined"
        value={movie.year}
        onChange={handleInput}
      />
      <TextField
        name="rating"
        fullWidth
        label="Rating"
        variant="outlined"
        value={movie.rating}
        onChange={handleInput}
      />
      <TextField
        name="bannerImage"
        fullWidth
        label="Banner Image"
        variant="outlined"
        value={movie.bannerImage}
        onChange={handleInput}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        value={movie.price}
        onChange={handleInput}
      />
      <TextField
        name="pic1"
        fullWidth
        label="Picture 1"
        variant="outlined"
        value={movie.pic1}
        onChange={handleInput}
      />
      <TextField
        name="pic2"
        fullWidth
        label="Picture 2"
        variant="outlined"
        value={movie.pic2}
        onChange={handleInput}
      />
      <TextField
        name="pic3"
        fullWidth
        label="Picture 3"
        variant="outlined"
        value={movie.pic3}
        onChange={handleInput}
      />
      <TextField
        name="pic4"
        fullWidth
        label="Picture 4"
        variant="outlined"
        value={movie.pic4}
        onChange={handleInput}
      />
      <TextField
        name="pic5"
        fullWidth
        label="Picture 5"
        variant="outlined"
        value={movie.pic5}
        onChange={handleInput}
      />
      <TextField
        name="pic6"
        fullWidth
        label="Picture 6"
        variant="outlined"
        value={movie.pic6}
        onChange={handleInput}
      />
      <TextField
        name="pic7"
        fullWidth
        label="Picture 7"
        variant="outlined"
        value={movie.pic7}
        onChange={handleInput}
      />
      <TextField
        name="pic8"
        fullWidth
        label="Picture 8"
        variant="outlined"
        value={movie.pic8}
        onChange={handleInput}
      />
      <TextField
        name="trailer1Image"
        fullWidth
        label="Trailer 1 Image"
        variant="outlined"
        value={movie.trailer1Image}
        onChange={handleInput}
      />
      <TextField
        name="trailer1Link"
        fullWidth
        label="Trailer 1 Link"
        variant="outlined"
        value={movie.trailer1Link}
        onChange={handleInput}
      />
      <TextField
        name="trailer2Image"
        fullWidth
        label="Trailer 2 Image"
        variant="outlined"
        value={movie.trailer2Image}
        onChange={handleInput}
      />
      <TextField
        name="trailer2Link"
        fullWidth
        label="Trailer 2 Link"
        variant="outlined"
        value={movie.trailer2Link}
        onChange={handleInput}
      />
      <TextField
        name="genre"
        fullWidth
        label="Genre"
        variant="outlined"
        value={movie.genre}
        onChange={handleInput}
      />
      <CategorySelect
        handleCategoryChange={handleCategoryChange}
        selectedCategory={movie.category}
      />
      <Button onClick={handleSaveClick} fullWidth variant="contained">
        Save {movie.category === "Cartoons" ? "Cartoon" : "Movie"}
      </Button>
    </Box>
  );
};

export default EditMovie;
