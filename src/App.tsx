import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" disableGutters>
        <section id="home">
          <HomePage />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <Footer />
      </Container>
    </>
  );
};

export default App;
