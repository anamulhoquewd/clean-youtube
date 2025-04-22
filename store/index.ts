import { createStore } from "easy-peasy";
import playlistModel from "./playlistStore";
import favoriteModel from "./favoriteStore";
import recentModel from "./recantsStore";
import { CreateStore } from "@/types/store";

const store = createStore<CreateStore>({
  playlists: playlistModel,
  favorites: favoriteModel,
  recants: recentModel,
});

export default store;
