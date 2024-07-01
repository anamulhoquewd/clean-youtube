import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import Playlists from "./pages/playlists";
import NotFound from "./pages/error";
import NavBer from "./components/nav-bar";
import Favorites from "./pages/favorites";
import Recents from "./pages/recents";
import { Router } from "@reach/router";
import Videos from "./pages/videos/";
import VideoPlay from "./pages/play";
import { useStoreActions, useStoreState } from "easy-peasy";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
  const setMode = useStoreActions((actions) => actions.darkMode);
  const getMode = useStoreState((states) => states.darkMode).mode;

  const darkTheme = createTheme({
    palette: {
      mode: getMode ? "dark" : "light",
      bgAppBerDefault: getMode ? "#272727" : "#fff",
      drawerTextDefault: getMode ? "#fff" : "#707070",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <NavBer handleThemes={() => setMode.set(!getMode)} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Router>
            <Playlists path="/" />
            <Favorites path="/favorites" />
            <Recents path="/recents" />
            <Videos path="/playlist/:playlistId" />
            <VideoPlay path="playlist/:playlistId/wacth/:videoId" />

            <NotFound path="*" />
          </Router>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
