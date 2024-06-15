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
import { Button, Grid, Link } from "@mui/material";
import NavBar from "../../components/nav-bar/Index";
import MyDrawer from "../../components/drawer/Index";
import VideoCard from "../../components/video-card/Index";
import { useStoreState } from "easy-peasy";
import { CircularProgress } from "@mui/material";
import DemoCard from "../../components/video-card/Demo";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //   const { playlistId } = useParams();
  let playlists = useStoreState((state) => state.playlists);

  let playlist;
  if (playlists !== null) playlist = Object.values(playlists.data);

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar open={open} />

      <MyDrawer
        open={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
        {playlist.length === 0 ? (
          <DemoCard />
        ) : (
          <Grid
            container
            spacing={{ xs: 2 }}
            columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          >
            {playlist.map((item) => (
              <Grid
                display={"flex"}
                flexWrap={"wrap"}
                key={item.playlistId}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <VideoCard playlist={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Home;
