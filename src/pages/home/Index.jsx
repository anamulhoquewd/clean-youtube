import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Forward10Icon from "@mui/icons-material/Forward10";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red } from "@mui/material/colors";
import { Button, Link } from "@mui/material";
import NavBar from "../../components/nav-bar/Index";
import MyDrawer from "../../components/drawer/Index";

const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar open={open} />

      {/* <Drawer
        onMouseOver={handleDrawerOpen}
        onMouseOut={handleDrawerClose}
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
              >
                <ListItemButton
                  onClick={(e) => console.log(e.target)}
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
        <Divider />
      </Drawer> */}

      <MyDrawer
        open={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
