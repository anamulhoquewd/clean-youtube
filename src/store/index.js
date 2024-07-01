import { action, createStore, persist } from "easy-peasy";
import playlistModel from "./playlistStore";
import favoriteModel from "./favoriteStore";
import recentModel from "./recentsStore";

const store = createStore({
  playlists: playlistModel,
  favorites: favoriteModel,
  recents: recentModel,
  darkMode: persist({
    mode: true,
    set: action((state, payload) => {
      state.mode = payload;
    }),
  }),
});

export default store;
