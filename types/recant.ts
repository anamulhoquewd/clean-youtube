import { Action } from "easy-peasy";
import { PlaylistItem } from "./playlist";

export interface RecantModel {
  items: string[];

  addItem: Action<RecantModel, string>;
  removeItem: Action<RecantModel, string>;
}
