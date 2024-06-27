import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {},
  error: "",
  loading: false,

  addItem: action(({ data }, payload) => {
    data[payload.playlistId] = payload;
  }),

  getItem: thunk(async ({ addItem }, playlistId, { getState }) => {
    if (getState().data[playlistId]) return; // error throw korbo

    try {
      const playlist = await getPlaylist(playlistId);
      addItem(playlist);
    } catch (e) {
      console.log(e?.response?.data?.error?.message || "Sumthin went wrong!");
    }
  }),

  removeItem: action(({ data }, payload) => {
    delete data[payload];
  }),
});

export default playlistModel;
