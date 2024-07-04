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
