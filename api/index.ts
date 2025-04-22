import axios from "axios";

const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet,status,id&playlistId=${playlistId}&key=${key}&maxResults=50&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

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
    const { title, description, thumbnails, position } = item.snippet;

    return {
      title,
      description,
      thumbnails: thumbnails,
      contentDetails: item.contentDetails,
      position,
    };
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails,
    channelId,
    channelTitle,
    playlistItems,
  };
};

export default getPlaylist;
