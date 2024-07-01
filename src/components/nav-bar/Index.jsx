import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Stack } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "@reach/router";
import MuiLink from "@mui/material/Link";
import { useState } from "react";
import MyDrawer from "../drawer";
import Form from "../form";

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBer({ handleThemes }) {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleFormOpen = () => {
    setOpenForm(true);
  };
  const handleFormClose = () => {
    setOpenForm(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          bgcolor: "bgAppBerDefault",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                color: "red",
              }}
            >
              <YouTubeIcon fontSize="large" color="inherit" />
              <Typography variant="h6" noWrap textDecoration="none">
                Clean YouTube
              </Typography>
            </Box>
          </Link>

          <Stack marginLeft={"auto"} direction="row" spacing={0.5}>
            <IconButton onClick={handleThemes}>
              <DarkModeIcon />
            </IconButton>
            <MuiLink
              href="https://github.com/anamulhoquewd/clean-youtube"
              target="_blank"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </MuiLink>
            <Button variant="outlined" onClick={handleFormOpen}>
              Add Playlist
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <MyDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <Form open={openForm} handleClose={handleFormClose} />
    </>
  );
}
