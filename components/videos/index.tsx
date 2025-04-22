import Image from "next/image";
import Content from "../video-content";
import Link from "next/link";

interface Props {
  v: string;
  channelTitle: string;
  playlistItems: any[];
  playlistTitle: string;
  index: number;
  playlistId: string;
}

function Videos({
  v,
  index,
  channelTitle,
  playlistTitle,
  playlistItems,
  playlistId,
}: Props) {
  return (
    <div>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-4 lg:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <Content
              channelTitle={channelTitle}
              description={playlistItems[index].description}
              playlistTitle={playlistTitle}
              title={playlistItems[index].title}
              videoPublishedAt={
                playlistItems[index].contentDetails.videoPublishedAt
              }
              v={v}
            />

            {/* Sidebar - Playlist */}
            <div className="lg:col-span-1">
              <div className="rounded-lg pb-2 bg-accent">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{playlistTitle}</h2>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">
                    {channelTitle} • {index + 1} /{playlistItems.length}
                  </div>
                </div>

                <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
                  {/* Video 1 - Current */}
                  {playlistItems.map((item, i) => {
                    return (
                      <Link
                        href={`/watch?v=${item.contentDetails.videoId}&list=${playlistId}&index=${item.position}`}
                        key={item.position}
                        className={`flex items-center gap-2 p-2 duration-300 transform ease-in-out hover:bg-accent-foreground/5 ${
                          index === i && "bg-accent-foreground/10"
                        }`}
                      >
                        <div className="flex-shrink-0 text-center text-xs text-muted-foreground w-4">
                          {item.position + 1}
                        </div>
                        <div className="aspect-video w-32 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={item.thumbnails.default.url || ""}
                            alt={item.title}
                            width={item.thumbnails.default.width || 120}
                            height={item.thumbnails.default.height || 90}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="line-clamp-2 text-sm font-medium">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-gray-400">
                            {channelTitle}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
