import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import Playlists from "./pages/playlists";
import { useState } from "react";
import NotFound from "./pages/error";
import NavBer from "./components/nav-bar";
import Favorites from "./pages/favorites";
import Recents from "./pages/recents";
import { Router } from "@reach/router";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

 const  App = ()=> {
  const [themes, setThemes] = useState(true);

  const handleThemes = () => {
    setThemes(!themes);
  };

  const darkTheme = createTheme({
    palette: {
      mode: themes ? "dark" : "light",
      bgAppBerDefault: themes ? "#272727" : "#fff",
      drawerTextDefault: themes ? "#fff" : "#707070",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <NavBer handleThemes={handleThemes} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Router>
            <Playlists path="/" />
            <Playlists path="/playlists" />
            <Favorites path="/favorites" />
            <Recents path="/recents" />
            <NotFound path="*" />
          </Router>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default  App