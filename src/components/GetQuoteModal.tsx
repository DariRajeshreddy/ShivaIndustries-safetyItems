import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box,
    Typography,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

interface GetQuoteModalProps {
    open: boolean;
    onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = () => {
        console.log("Form Submitted:", formData);
        // You can call your API or email service here
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
                Get a Quote
            </DialogTitle>

            <DialogContent>
                <Typography variant="body2" sx={{ mb: 2, textAlign: "center" }}>
                    Please fill in your details and our team will contact you shortly.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                    />

                    {/* 🌍 Country Code + Phone Input */}
                    <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputStyle={{
                            width: "100%",
                            height: "56px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            borderColor: "#ccc",
                        }}
                        dropdownStyle={{
                            backgroundColor: "#fff",
                            zIndex: 9999,
                        }}
                        enableSearch
                        disableSearchIcon
                        specialLabel="Mobile Number"
                    />

                    <TextField
                        label="Message (optional)"
                        name="message"
                        multiline
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                    />
                </Box>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button onClick={onClose} color="secondary" variant="outlined">
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{
                        backgroundColor: "#d32f2f",
                        "&:hover": { backgroundColor: "#b71c1c" },
                    }}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default GetQuoteModal;
