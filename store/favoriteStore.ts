import { FavoriteModel } from "@/types/favorite";
import { action, persist } from "easy-peasy";

const favoriteModel = persist<FavoriteModel>({
  items: [],

  addItem: action(({ items }, payload) => {
    if (items.includes(payload)) return;
    items.push(payload);
  }),

  removeItem: action(({ items }, payload) => {
    // items.filter((item) => item !== payload);
    const index = items.indexOf(payload);

    if (index !== -1) items.splice(index, 1);
  }),
});

export default favoriteModel;
