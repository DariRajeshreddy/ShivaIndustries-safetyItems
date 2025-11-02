import React from "react";
import Slider, { Settings } from "react-slick";
import { Box, Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import safetyMain from "../assets/images/mainsafetyimg.jpg";
import roadSafety from "../assets/images/roadsafety.png";
import safetyShoes from "../assets/images/mainsafetyimg.jpg";
import generalSafety from "../assets/images/mainsafetyimg.jpg";
import disposableWear from "../assets/images/mainsafetyimg.jpg";
import eyeEarProtection from "../assets/images/mainsafetyimg.jpg";
import handGloves from "../assets/images/mainsafetyimg.jpg";
import fireControl from "../assets/images/mainsafetyimg.jpg";

interface Category {
    title: string;
    img: string;
}

const HomePage: React.FC = () => {
    const categories: Category[] = [
        { title: "Safety Items", img: safetyMain },
        { title: "", img: roadSafety },
        { title: "Safety Shoes", img: safetyShoes },
        { title: "General Safety Products", img: generalSafety },
        { title: "Disposable Wears", img: disposableWear },
        { title: "Eye & Ear Protection", img: eyeEarProtection },
        { title: "Hand Gloves", img: handGloves },
        { title: "Fire Control Equipment", img: fireControl },
    ];

    const settings: Settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: false,
    };

    return (
        <Container maxWidth="xl" disableGutters>
            <Slider {...settings}>
                {categories.map((cat, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            height: { xs: 300, md: 550 },
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={cat.img}
                            alt={cat.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: "brightness(0.5)",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h3" fontWeight="bold">
                                {cat.title}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
};

export default HomePage;
