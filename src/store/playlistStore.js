import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {},
  error: "",
  isLoading: false, 

  addItem: action(({ data }, payload) => {
    data[payload.playlistId] = payload;
  }),

  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),

  getItem: thunk(async (state, playlistId, { getState }) => {
    if (getState().data[playlistId]) return; 

    state.setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      state.addItem(playlist);
    } catch (e) {
      console.log(e.response?.data?.error?.message || "Sumthin went wrong!");
      state.setError(
        e.response?.data?.error?.message || "Something went wrong"
      );
    } finally {
      state.setLoading(false);
    }
  }),

  removeItem: action(({ data }, payload) => {
    delete data[payload];
  }),
});

export default playlistModel;
