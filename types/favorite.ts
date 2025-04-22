import { Action } from "easy-peasy";

export interface FavoriteModel {
  items: string[];

  addItem: Action<FavoriteModel, string>;
  removeItem: Action<FavoriteModel, string>;
}
