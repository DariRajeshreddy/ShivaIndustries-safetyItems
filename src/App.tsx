import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Navbar />

      <Box display="flex">
        {/* Sidebar (fixed on left) */}
        <Sidebar />

        {/* Main Content */}
        <Box component="main" flex={1} p={4}>
          <Container maxWidth="lg">
            <Box textAlign="center" py={6}>
              <Typography
                variant="h3"
                color="primary"
                fontWeight="bold"
                gutterBottom
              >
                Welcome to Shiva Industries 🔥
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Your trusted supplier of fire safety and industrial protection
                equipment.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;
