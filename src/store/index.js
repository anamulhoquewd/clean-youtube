import { createStore } from "easy-peasy";
import playlistModel from "./playlistStore";
import favoriteModel from "./favoriteStore";
import recentModel from "./recentsStore";

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel,
});

export default store;
