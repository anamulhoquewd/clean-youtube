import { RecantModel } from "@/types/recant";
import { action, persist } from "easy-peasy";

const recentModel = persist<RecantModel>({
  items: [],

  addItem: action(({ items }, payload) => {
    if (items.includes(payload)) return;
    items.push(payload);

    if (items.length >= 13) items.shift();
  }),

  removeItem: action(({ items }, payload) => {
    // items.filter((item) => item !== payload);
    const index = items.indexOf(payload);

    if (index !== -1) items.splice(index, 1);
  }),
});

export default recentModel;
