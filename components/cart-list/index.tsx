import React from "react";
import { PlaylistCard } from "../playlist-cart";

function CartList({ playlists }) {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3 lg:grid-cols-4">
      {playlists?.length < 1 ? (
        <>
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </>
      ) : (
        playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.playlistId}
            thumbnail={playlist.playlistThumbnails.high}
            title={playlist.playlistTitle}
            videoCount={playlist.playlistItems.length}
            id={playlist.playlistId}
            videosId={playlist.playlistItems[0].contentDetails.videoId}
            position={playlist.playlistItems[0].position}
            playlist={playlist}
          />
        ))
      )}
    </div>
  );
}

export default CartList;
