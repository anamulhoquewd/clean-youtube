import { action, persist } from "easy-peasy";

const recentModel = persist({
  items: [],

  addItem: action(({ items }, payload) => {
    if (items.includes(payload)) return;
    items.push(payload);

    if (items.length > 6) items.shift();
  }),
});

export default recentModel;
