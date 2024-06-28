import React, { useEffect } from "react";
import { useMovie } from "../../context/MovieContextProvider";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useMovie();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          name="category"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
