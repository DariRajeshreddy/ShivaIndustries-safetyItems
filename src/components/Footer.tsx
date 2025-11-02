import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmsIcon from "@mui/icons-material/Sms";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)", // sleek glossy dark gray
                color: "#f5f5f5",
                py: 6,
                mt: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container sx={{ display: "flex", justifyContent: "space-between" }} spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} sm={6} md={3} {...({} as any)}>
                        <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ color: "#ffffff" }}>
                            Shiva Industries
                        </Typography>

                        <Box display="flex" alignItems="center" mb={1}>
                            <PersonIcon sx={{ mr: 1, color: "#52dfc2" }} />
                            <Typography variant="body2">Sanjeev Kapoor (Chairman)</Typography>
                        </Box>

                        <Box display="flex" alignItems="flex-start" mb={1}>
                            <LocationOnIcon sx={{ mr: 1, mt: "3px", color: "#52dfc2" }} />
                            <Typography variant="body2">
                                Building Municipal No. 4646, <br />
                                Ground Floor, Toshniwal Building, <br />
                                Ajmeri Gate, New Delhi - 110006, India
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mb={1}>
                            <PhoneIcon sx={{ mr: 1, color: "#52dfc2" }} />
                            <Typography variant="body2">08048984266</Typography>
                        </Box>

                        <Box display="flex" gap={1} mt={2}>
                            <IconButton
                                href="sms:08048984266"
                                sx={{
                                    backgroundColor: "#4f149a",
                                    color: "white",
                                    "&:hover": { backgroundColor: "#7746d6" },
                                }}
                            >
                                <SmsIcon />
                            </IconButton>
                            <IconButton
                                href="mailto:info@shivindustries.com"
                                sx={{
                                    backgroundColor: "#4f149a",
                                    color: "white",
                                    "&:hover": { backgroundColor: "#7746d6" },
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Box>

                        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 2 }} />

                        <Box display="flex" gap={1}>
                            <IconButton sx={{ color: "#52dfc2", "&:hover": { color: "#00b5a0" } }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#52dfc2", "&:hover": { color: "#00b5a0" } }}>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ color: "#52dfc2", "&:hover": { color: "#00b5a0" } }}>
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Company Profile */}
                    <Grid item xs={12} sm={6} md={3}  {...({} as any)}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Company Profile
                        </Typography>
                        {[
                            "Home",
                            "About Us",
                            "What We Offer",
                            "Corporate Video",
                            "Corporate Brochure",
                            "Corporate Presentation",
                            "Contact Us",
                            "Sitemap",
                        ].map((item) => (
                            <Typography key={item} variant="body2" sx={{ mb: 0.7 }}>
                                <Link href="#" color="inherit" underline="hover">
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Products & Services 1 */}
                    <Grid item xs={12} sm={6} md={3}  {...({} as any)}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Products & Services
                        </Typography>
                        {[
                            "Safety Shoes",
                            "Road Safety Item",
                            "General Safety Products",
                            "Disposable Wears",
                            "Eye Ear Protection",
                            "Hand Gloves",
                            "Fire Control Equipment",
                            "Body Protection",
                        ].map((item) => (
                            <Typography key={item} variant="body2" sx={{ mb: 0.7 }}>
                                <Link href="#" color="inherit" underline="hover">
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Products & Services 2 */}
                    <Grid item xs={12} sm={6} md={3}  {...({} as any)}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            More Products
                        </Typography>
                        {[
                            "PVC Tierod Cone",
                            "Head Fall Protection",
                            "Road Safety Product",
                            "First Aid Kit & Rescue Equipment",
                            "Anti Static Products",
                            "Rain Wear And Accessories",
                            "Industrial Tapes & Reflectors",
                            "Sintex Waste Management Dustbin",
                        ].map((item) => (
                            <Typography key={item} variant="body2" sx={{ mb: 0.7 }}>
                                <Link href="#" color="inherit" underline="hover">
                                    {item}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 4 }} />

                <Box textAlign="center">
                    <Typography variant="body2" color="gray">
                        © {new Date().getFullYear()} Shiva Industries — All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
