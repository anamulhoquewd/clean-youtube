import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, Link } from "@mui/material";
import Form from "../form/Index";
import { useState } from "react";

const HOST = import.meta.env.VITE_HOST;

const NavBar = ({ open }) => {
  const [openForm, setFormOpen] = useState(false);
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  const handleClickClose = () => {
    setFormOpen(false);
  };

  

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      // position="fixed"
      open={open}
    >
      <Link color="inherit" href={HOST} sx={{ textDecoration: "none" }}>
        <Toolbar sx={{ transition: "all" }}>
          <YouTubeIcon
            fontSize="large"
            color="inherit"
            sx={{
              ml: 7,
              ...(open && { ml: 27 }),
              transition: "all",
            }}
          />
          <Typography variant="h6" ml={1.5} noWrap>
            Clean YouTube
          </Typography>
        </Toolbar>
      </Link>

      <Button
        variant="outlined"
        sx={{ px: 2, mr: 2, borderRadius: 2, fontSize: 14 }}
        onClick={handleClickOpen}
      >
        Add Playlist
      </Button>
      <Form open={openForm} handleClose={handleClickClose} />
    </AppBar>
  );
};

export default NavBar;
