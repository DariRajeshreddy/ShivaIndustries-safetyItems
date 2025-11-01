import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-red-700 font-bold">
          Shiva Industries
        </Typography>
        <div className="flex gap-4">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">About</Button>
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
