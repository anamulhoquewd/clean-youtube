import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import storage from "./util/storage";
import Home from "./pages/home/Index";

const SESSION_KEY = "MY_SESSION_STORAGE_KEY";
const App = () => {
  const data = storage.get(SESSION_KEY);
  console.log(data);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
