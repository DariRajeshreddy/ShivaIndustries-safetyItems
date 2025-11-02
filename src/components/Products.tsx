import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import {
    Whatshot,
    Construction,
    SafetyCheck,
    LocalFireDepartment,
    Engineering,
    LocalPolice,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Fire Extinguishers",
        description: "Reliable extinguishers for homes, offices, and industries.",
        icon: <LocalFireDepartment sx={{ fontSize: 60, color: "#d32f2f" }} />,
    },
    {
        id: 2,
        name: "Safety Helmets",
        description: "Durable helmets providing superior head protection.",
        icon: <SafetyCheck sx={{ fontSize: 60, color: "#1976d2" }} />,
    },
    {
        id: 3,
        name: "Industrial Gloves",
        description: "High-grip gloves ensuring hand safety and comfort.",
        icon: <Construction sx={{ fontSize: 60, color: "#ef6c00" }} />,
    },
    {
        id: 4,
        name: "Fire Suits",
        description: "Heat-resistant suits for maximum fire safety.",
        icon: <Whatshot sx={{ fontSize: 60, color: "#c62828" }} />,
    },
    {
        id: 5,
        name: "Safety Shoes",
        description: "Shockproof, anti-slip shoes for industrial use.",
        icon: <Engineering sx={{ fontSize: 60, color: "#1565c0" }} />,
    },
    {
        id: 6,
        name: "Road Safety Kits",
        description: "Cones, reflectors, and signage for road safety.",
        icon: <LocalPolice sx={{ fontSize: 60, color: "#0288d1" }} />,
    },
];

const Products: React.FC = () => {
    return (
        <Box
            sx={{
                py: 8,
                background:
                    "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 100%)",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "#222", mb: 4 }}
            >
                Our Products
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} {...({} as any)}>
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Card
                                sx={{
                                    textAlign: "center",
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    py: 4,
                                    backgroundColor: "#fff",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: 5,
                                        backgroundColor: "#f5f5f5",
                                    },
                                }}
                            >
                                <motion.div
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {product.icon}
                                </motion.div>

                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {product.description}
                                    </Typography>
                                    <Button variant="contained" color="secondary" size="small">
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Products;
