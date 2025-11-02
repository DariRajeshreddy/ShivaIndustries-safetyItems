import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import GetQuoteModal from "./GetQuoteModal";


const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ConstructionIcon sx={{ mr: 1, color: "black" }} />
            <Typography
              variant="h6"
              onClick={() => handleScroll("home")}
              sx={{ fontWeight: "bold", color: "black", letterSpacing: 1 }}
            >
              SHIVA INDUSTRIES
            </Typography>
          </Box>

          {/* Menu */}
          <Box>
            <Button sx={{ color: "white" }} onClick={() => handleScroll("home")}>
              Home
            </Button>
            <Button sx={{ color: "white" }} color="inherit" onClick={() => handleScroll("products")}>
              Products
            </Button>
            <Button sx={{ color: "white" }} color="inherit" onClick={() => handleScroll("about")}>
              About Us
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                bgcolor: "#212121",
                "&:hover": { bgcolor: "#000" },
                borderRadius: "50px",
              }}
              onClick={() => setOpenModal(true)}
            >
              Get Quote
            </Button>
          </Box>


        </Toolbar>
      </AppBar>
      <GetQuoteModal open={openModal} onClose={() => setOpenModal(false)} />

    </>
  );
}

export default Navbar;
