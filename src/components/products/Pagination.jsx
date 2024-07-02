import React from "react";
import { Pagination } from "@mui/material";

const PaginationControlled = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(event, value) => onPageChange(value)}
      color="primary"
    />
  );
};

export default PaginationControlled;
