"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import AddPlaylistForm from "../form/add-playlist";
import usePlaylist from "@/hooks/use-playlist";
import { useStoreState } from "easy-peasy";
import { CreateStore } from "@/types/store";

function AddPlaylist() {
  const loading = useStoreState((states: CreateStore) => states.playlists).loading;
  const { isOpen, setIsOpen, form, onSubmit } = usePlaylist();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onChange={() => setIsOpen(true)}
          className="w-auto cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add Playlist
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Playlist</DialogTitle>
          <DialogDescription>
            Enter your youTube playlist ID or url here.
          </DialogDescription>
        </DialogHeader>
        {/* Add playlist form */}
        <AddPlaylistForm form={form} onSubmit={onSubmit} loading={loading} />
      </DialogContent>
    </Dialog>
  );
}

export default AddPlaylist;
