import React, { useState } from "react";
import AddCategory from "../components/products/AddCategory";

import AddMovie from "../components/products/AddMovie";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          // color: "ff8085",
        }}
        onClick={handleOpen}
      >
        Add category
      </button>
      <AddMovie />
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
//!!!!!
// import React, { useState } from "react";
// import { Box, Button, Typography } from "@mui/material";
// import AddMovie from "./AddMovie";
// import MovieList from "./MovieList";
// import CartoonList from "./CartoonList";

// const AdminPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Movies"); // Установим Movies по умолчанию

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category); // Изменяем выбранную категорию
//   };

//   return (
//     <Box sx={{ padding: "20px" }}>
//       <Typography variant="h4" gutterBottom>
//         Admin Page
//       </Typography>
//       <Button
//         onClick={() => handleCategoryChange("Movies")}
//         variant={selectedCategory === "Movies" ? "contained" : "outlined"}
//       >
//         Movies
//       </Button>
//       <Button
//         onClick={() => handleCategoryChange("Cartoons")}
//         variant={selectedCategory === "Cartoons" ? "contained" : "outlined"}
//       >
//         Cartoons
//       </Button>
//       <AddMovie />{" "}
//       {/* Компонент для добавления новых фильмов или мультфильмов */}
//       {selectedCategory === "Movies" && <MovieList />}{" "}
//       {/* Отображаем список фильмов при выбранной категории Movies */}
//       {selectedCategory === "Cartoons" && <CartoonList />}{" "}
//       {/* Отображаем список мультфильмов при выбранной категории Cartoons */}
//     </Box>
//   );
// };

// export default AdminPage;
