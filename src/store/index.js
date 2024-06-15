import { createStore } from "easy-peasy";
import playlistModel from "./playlistStore";

const store = createStore({
  playlists: playlistModel,
});

export default store;
