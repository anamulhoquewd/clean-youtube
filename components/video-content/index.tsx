"use client";

import { format } from "date-fns";
import { Button } from "../ui/button";
import YouTube from "react-youtube";
import { Share2, Download } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  videoPublishedAt: string;
  channelTitle: string;
  playlistTitle: string;
  v: string;
}

function Content({
  title,
  description,
  videoPublishedAt = new Date().toISOString(),
  channelTitle,
  playlistTitle,
  v,
}: Props) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="lg:col-span-2">
      {/* Video Player */}
      <div className="aspect-video w-full rounded-2xl overflow-hidden">
        <YouTube
          className="w-full h-full"
          videoId={v!}
          opts={{
            playerVars: {
              autoplay: 0,
            },
          }}
          iframeClassName="w-full h-full" // this is important
        />
      </div>

      {/* Video Info */}
      <div className="mt-4">
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full w-10 h-10 font-bold"
              disabled
            >
              {channelTitle.charAt(0) || "?"}
            </Button>
            <div className="font-medium">{channelTitle}</div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="ghost" className="rounded-full cursor-pointer">
              <Share2 className="mr-2 h-5 w-5" /> Share
            </Button>

            <Button variant="ghost" className="rounded-full cursor-pointer">
              <Download className="mr-2 h-5 w-5" /> Download
            </Button>
          </div>
        </div>

        {/* Video Description */}
        <div className="mt-4 rounded-lgp-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              {format(new Date(videoPublishedAt), "PPP")}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">{playlistTitle}</p>
          {description && showMore ? (
            <p className="mt-4 text-sm">{description}</p>
          ) : (
            <p className="mt-4 text-sm line-clamp-2">{description}</p>
          )}
          {description && !showMore && (
            <span
              className="text-xs underline cursor-pointer"
              onClick={toggleShowMore}
            >
              Show more
            </span>
          )}
          {description && showMore && (
            <span
              className="text-xs underline cursor-pointer"
              onClick={toggleShowMore}
            >
              Show less
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
