import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import {
  Home,
  Info,
  ContactMail,
  ExpandLess,
  ExpandMore,
  YouTube,
  Search,
  Shield,
  EmojiPeople,
  Work,
  HealthAndSafety,
  Engineering,
  Handyman,
  FireExtinguisher,
} from "@mui/icons-material";

const categories = [
  { name: "Safety Shoes", icon: <Work />, count: 56 },
  { name: "Road Safety Item", icon: <EmojiPeople />, count: 38 },
  { name: "General Safety Products", icon: <HealthAndSafety />, count: 39 },
  { name: "Disposable Wears", icon: <Engineering />, count: 31 },
  { name: "Eye Ear Protection", icon: <Shield />, count: 27 },
  { name: "Hand Gloves", icon: <Handyman />, count: 31 },
  { name: "Fire Control Equipment", icon: <FireExtinguisher />, count: 37 },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 280,
          boxSizing: "border-box",
          backgroundColor: "#fff",
          borderRight: "1px solid #ddd",
          paddingTop: 2,
        },
      }}
    >
      <Box px={2}>
        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
          Shiva Industries
        </Typography>
      </Box>

      <Divider />

      <List>
        <ListItemButton>
          <ListItemIcon><Home color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><Info color="primary" /></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><YouTube color="error" /></ListItemIcon>
          <ListItemText primary="Watch Company Video" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><ContactMail color="primary" /></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItemButton>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle1" px={2} fontWeight="bold" color="error">
          What We Offer
        </Typography>

        {categories.map((cat) => (
          <React.Fragment key={cat.name}>
            <ListItemButton onClick={() => handleToggle(cat.name)}>
              <ListItemIcon>{cat.icon}</ListItemIcon>
              <ListItemText primary={`${cat.name} (${cat.count})`} />
              {open === cat.name ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open === cat.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary={`View ${cat.name}`} />
                </ListItemButton>
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>

      <Box px={2} py={1}>
        <Typography
          variant="body2"
          color="error"
          fontWeight="bold"
          sx={{ cursor: "pointer" }}
        >
          + View all
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" px={2} pb={2}>
        <InputBase
          placeholder="Search Products..."
          sx={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "20px",
            pl: 2,
            pr: 1,
            height: 35,
          }}
        />
        <IconButton color="primary">
          <Search />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
