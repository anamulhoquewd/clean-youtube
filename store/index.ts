import { createStore } from "easy-peasy";
import playlistModel from "./playlistStore";
import favoriteModel from "./favoriteStore";
import recentModel from "./recantsStore";

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recants: recentModel,
});

export default store;
