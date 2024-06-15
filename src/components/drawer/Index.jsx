import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Forward10Icon from "@mui/icons-material/Forward10";
import Form from "../form/Index";
import { useState } from "react";

const drawerWidth = 220;

const MyDrawer = ({ open, handleOpen, handleClose }) => {
  const [openForm, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
  };
  const handleClickClose = () => {
    setFormOpen(false);
  };

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

  return (
    <Drawer
      onMouseOver={handleOpen}
      onMouseOut={handleClose}
      variant="permanent"
      open={open}
    >
      <List>
        {["Home", "Playlists", "Favorites", "Recents", "Add Playlist"].map(
          (text, index) => (
            <ListItem
              key={Math.random() * index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                text === "Add Playlist" && handleClickOpen()
              }}
            >
              <ListItemButton
                onClick={() => handleClickOpen}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <HomeIcon />
                  ) : index === 1 ? (
                    <PlaylistPlayIcon />
                  ) : index === 2 ? (
                    <FavoriteIcon />
                  ) : index === 3 ? (
                    <Forward10Icon />
                  ) : (
                    <AddCircleIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Form handleClose={handleClickClose} open={openForm} />
      <Divider />
    </Drawer>
  );
};

export default MyDrawer;
