import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { deepOrange, deepPurple } from '@mui/material/colors';

import Drawer from "@mui/material/Drawer";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BoyIcon from "@mui/icons-material/Boy";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


const drawerWidth = 240;

function ResponsiveDrawer(props) {

  // Loggedin User Info
  let user = JSON.parse(localStorage.getItem('userInfo') )
  console.log(user?user:"not loggedin")

  // for modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border:"7px solid #2a314d",
    borderRadius:"23px",
    p: 4,
  };
  const [openUserModal, setOpenUserModal] = React.useState(false);
  const handleOpenUserModal = () => setOpenUserModal(true);
  const handleCloseUserModal = () => setOpenUserModal(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* Item1: For User name */}
        <ListItem onClick={handleOpenUserModal} style={{ cursor: "pointer" }}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={(user?user.fname:"")+" "+(user?user.lname:"")} secondary={user?user.role:""} />
        </ListItem>

        {/* ITEM2: For Organization name */}
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user?user.organization:""} />
        </ListItem>

        {/* ITEM3: For Chats */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link
              to="/mainChat"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText primary={"My Chats"} />
            </Link>
          </ListItemButton>
        </ListItem>

        {/* ITEM4: Ride Statistics */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon fontSize="large" />
            </ListItemIcon>
            <Link
              to="/mainChat"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText primary={"Ride Statistics"} />
            </Link>
          </ListItemButton>
        </ListItem>

        {/* ITEM5: Will be shown only if the user is authentication authority */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BoyIcon fontSize="large" />
            </ListItemIcon>
            <Link
              to="/mainChat"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText primary={"Requests"} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar style={{ display: "none" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ color: "orange" }}
            >
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        ></Box>
      </Box>

      {/* MODAL 1: User Profile MOdal */}
      <Modal
        open={openUserModal}
        onClose={handleCloseUserModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="d-flex justify-content-center">
              <Avatar  sx={{ bgcolor: deepOrange[500] }}>S</Avatar>
              </Card.Title>
              <Card.Title>Srushti Nayak</Card.Title>
              <Card.Text>
                Role
              </Card.Text>
              <Button variant="primary">Organization</Button>
            </Card.Body>
          </Card>
        </Box>
      </Modal>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
