import { cn } from "@/lib/utils";
import { Heart, ListMinus, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useStoreActions, useStoreState } from "easy-peasy";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PlaylistCardProps {
  id: string;
  title: string;
  videoCount: number;
  videosId: string;
  position: number;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
}

export function PlaylistCard({
  id,
  title,
  thumbnail,
  videoCount,
  videosId,
  playlist,
  position,
}: PlaylistCardProps) {
  const favoritesAction = useStoreActions((actions) => actions.favorites);
  const playlistsAction = useStoreActions((actions) => actions.playlists);
  const recantsAction = useStoreActions((actions) => actions.recants);
  const favoritesState = useStoreState((states) => states.favorites);

  const hasFavorite = favoritesState.items.includes(id);

  console.log("Playlist: ", playlist);

  return (
    <div className={"group flex flex-col"}>
      <div className={"relative aspect-video overflow-hidden rounded-xl"}>
        <Link
          href={`/watch?v=${videosId}&list=${id}&index=${position}`}
          className="block"
          onClick={() => recantsAction.addItem(id)}
        >
          <Image
            src={thumbnail.url || ""}
            alt={title}
            fill
            className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-3 right-3 rounded bg-background/60 text-background-foreground px-2 py-1 text-xs font-medium flex items-center">
            <ListMinus className="mr-1 w-3.5 h-3.5" />
            <span>
              {videoCount} {videoCount === 1 ? "video" : "videos"}
            </span>
          </div>
        </Link>

        <div className="absolute cursor-pointer right-2 top-2 bottom-3 z-10 flex gap-1">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="flex items-center justify-center cursor-pointer bg-background/60 text-background-foreground hover:bg-background/80"
                aria-label={"Delete playlist"}
                size="icon"
              >
                <Trash2 className={cn("h-3 w-3 transition-all")} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="cursor-pointer">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    playlistsAction.removeItem(id);
                    favoritesAction.removeItem(id);
                    recantsAction.removeItem(id);
                  }}
                  className="bg-red-600 hover:bg-red-700 cursor-pointer"
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="flex items-center justify-center cursor-pointer bg-background/60 text-background-foreground hover:bg-background/80"
                  aria-label={
                    hasFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  size="icon"
                  onClick={() => {
                    hasFavorite
                      ? favoritesAction.removeItem(id)
                      : favoritesAction.addItem(id);
                  }}
                >
                  <Heart
                    className={cn(
                      "h-3 w-3 transition-all",
                      hasFavorite && "fill-accent-foreground"
                    )}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {hasFavorite ? "Remove from favorites" : "Add to favorites"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="mt-3 flex flex-col">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h2 className="font-medium leading-tight line-clamp-2">
                {title}
              </h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Link
          href={`/watch?v=${videosId}&list=${id}&index=${position}`}
          className="mt-1 text-sm text-muted-foreground hover:text-primary w-fit"
          onClick={() => recantsAction.addItem(id)}
        >
          View full playlist
        </Link>
      </div>
    </div>
  );
}
