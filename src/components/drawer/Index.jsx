import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Stack, ThemeProvider, createTheme } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Forward10Icon from "@mui/icons-material/Forward10";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Router } from "@reach/router";
import { Group } from "@mui/icons-material";
import { useState } from "react";
import Form from "../form";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MyDrawer({ handleDrawerClose, open }) {
  const theme = useTheme();

  const [openForm, setOpenForm] = useState(false);

  const handleFormOpen = () => {
    setOpenForm(true);
  };
  const handleFormClose = () => {
    setOpenForm(false);
  };

  const CustomListItem = ({ item }) => (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        color: "drawerTextDefault",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {[
            {
              text: "Playlists",
              icon: <PlaylistPlayIcon />,
              link: "playlists",
            },
            {
              text: "Favorites",
              icon: <FavoriteIcon />,
              link: "favorites",
            },
            {
              text: "Recents",
              icon: <Forward10Icon />,
              link: "recents",
            },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <CustomListItem item={item} />
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              text: "Add Playlist",
              icon: <AddCircleIcon />,
            },
          ].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{ display: "block" }}
              onClick={handleFormOpen}
            >
              <CustomListItem item={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Form open={openForm} handleClose={handleFormClose} />
    </>
  );
}
