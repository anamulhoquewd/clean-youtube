import getPlaylist from "@/api";
import { PlaylistModel } from "@/types/playlist";
import { action, persist, thunk } from "easy-peasy";

const playlistModel = persist<PlaylistModel>({
  data: {},
  loading: false,

  addItem: action(({ data }, payload) => {
    data[payload.playlistId] = payload;
  }),

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  getItem: thunk(async (state, playlistId, { getState }) => {
    state.removeItem(playlistId);
    if (getState().data[playlistId]) return;

    state.setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      state.addItem(playlist);
    } catch (e: any) {
      console.log(e.response?.data?.error?.message || "Something went wrong!");
    } finally {
      state.setLoading(false);
    }
  }),

  removeItem: action(({ data }, payload) => {
    delete data[payload];
  }),
});

export default playlistModel;
