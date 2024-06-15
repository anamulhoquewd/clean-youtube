import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet,status,id&playlistId=${playlistId}&key=${key}&maxResults=50&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...data.items, ...result];

  if (data.nextPageToken) {
    result = getPlaylistItems(playlistId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet;

  let playlistItems = await getPlaylistItems(playlistId);

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails,
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: thumbnails.default,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail: thumbnails.medium,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
