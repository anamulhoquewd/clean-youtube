import { Action, Thunk } from "easy-peasy";

export interface PlaylistItem {
  channelId: string;
  channelTitle: string;
  playlistDescription: string;
  playlistId: string;
  playlistTitle: string;
  playlistItems: YoutubePlaylistItem[];
  playlistThumbnails: Thumbnails;
}

export interface YoutubeApiPlaylistItem {
  snippet: {
    title: string;
    description: string;
    thumbnails: Thumbnails;
    position: number;
  };
  contentDetails: ContentDetails;
}

export interface PlaylistModel {
  data: Record<string, PlaylistItem>;
  loading: boolean;

  addItem: Action<PlaylistModel, PlaylistItem>;
  removeItem: Action<PlaylistModel, string>;
  setLoading: Action<PlaylistModel, boolean>;
  getItem: Thunk<PlaylistModel, string>;
}

export interface YoutubePlaylistItem {
  position: number;
  contentDetails: ContentDetails;
  description: string;
  nextPageToken?: string;
  thumbnails: Thumbnails;
  title: string;
}

export interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

export interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeThumbnails {
  default: YoutubeThumbnail;
  medium: YoutubeThumbnail;
  high: YoutubeThumbnail;
  standard?: YoutubeThumbnail;
  maxres?: YoutubeThumbnail;
}

export interface FetchedPlaylist {
  playlistId: string;
  playlistTitle: string;
  playlistDescription: string;
  playlistThumbnails: Thumbnails;
  channelId: string;
  channelTitle: string;
  playlistItems: YoutubePlaylistItem[];
}
