"use client";

import Videos from "@/components/videos";
import { useStoreState } from "easy-peasy";
import { useSearchParams } from "next/navigation";

function Page() {
  const v = useSearchParams().get("v");
  const list = useSearchParams().get("list");
  const index = useSearchParams().get("index");

  const playlistsState = useStoreState((state) => state.playlists);

  const playlists = playlistsState.data[list];

  if (!playlists)
    return (
      <div className="flex flex-1 flex-col gap-4 px-2 mt-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl col-span-2" />
          <div className="bg-muted/50 rounded-xl" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Videos
        v={v!}
        index={Number(index)}
        channelTitle={playlists.channelTitle}
        playlistTitle={playlists.playlistTitle}
        playlistItems={playlists.playlistItems}
        playlistId={list!}
      />
    </div>
  );
}

export default Page;
