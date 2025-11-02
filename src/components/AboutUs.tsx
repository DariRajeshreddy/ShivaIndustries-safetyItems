import React from "react";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import {
    Business,
    Scale,
    People,
    BarChart,
    Apartment,
    Language,
    ReceiptLong,
} from "@mui/icons-material";

const AboutUs: React.FC = () => {
    const infoItems = [
        {
            icon: <Business sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "Nature of Business",
            value: "Trader - Wholesaler/Distributor",
        },
        {
            icon: <People sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "Total Number of Employees",
            value: "11 to 25 People",
        },
        {
            icon: <Apartment sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "GST Registration Date",
            value: "01-07-2017",
        },
        {
            icon: <Scale sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "Legal Status of Firm",
            value: "Proprietorship",
        },
        {
            icon: <BarChart sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "Annual Turnover",
            value: "5 - 25 Cr",
        },
        {
            icon: <Language sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "Import Export Code (IEC)",
            value: "0505035138",
        },
        {
            icon: <ReceiptLong sx={{ fontSize: 40, color: "primary.main" }} />,
            label: "GST No.",
            value: "07AJNPK6879K1ZB",
        },
    ];

    return (
        <Box sx={{ bgcolor: "#F8F9FA", py: 8 }}>
            <Container>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="primary"
                    textAlign="center"
                    gutterBottom
                >
                    About Us
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ maxWidth: 800, mx: "auto", mb: 6 }}
                >
                    We are a leading manufacturer and supplier of industrial safety
                    products, clothing, and other accessories. Being an ISO 9001:2000
                    certified company, we provide a qualitative range of products to
                    clients across the nation.
                </Typography>

                <Grid container spacing={4}>
                    {infoItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}  {...({} as any)}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    height: "100%",
                                    textAlign: "center",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                    },
                                }}
                            >
                                <Box>{item.icon}</Box>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ mt: 2 }}
                                >
                                    {item.label}
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.value}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box textAlign="center" mt={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{
                            px: 5,
                            py: 1.5,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs;
