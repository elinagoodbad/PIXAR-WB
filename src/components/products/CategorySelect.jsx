import React from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const CategorySelect = ({ handleCategoryChange }) => {
  const categories = ["Movies", "Cartoons"];

  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        defaultValue=""
        onChange={(e) => handleCategoryChange(e.target.value)}
        label="Category"
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
