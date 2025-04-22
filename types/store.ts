import { FavoriteModel } from "./favorite";
import { PlaylistModel } from "./playlist";
import { RecantModel } from "./recant";

export interface CreateStore {
  playlists: PlaylistModel;
  favorites: FavoriteModel;
  recants: RecantModel;
}
