"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStoreActions } from "easy-peasy";
import { CreateStore } from "@/types/store";

function usePlaylist() {
  const playlists = useStoreActions(
    (actions: CreateStore) => actions.playlists
  );
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      value: "",
    },
  });

  const onSubmit = async (data: { value: string }) => {
    if (data.value.startsWith("PL")) {
      // @ID
      (playlists.getItem as any)(data.value);
    } else {
      // @URL
      const id = data.value
        .split("=")
        .filter((item) => item.startsWith("PL"))
        .toString();
      (playlists.getItem as any)(id);
    }

    setIsOpen(false);
    form.reset({
      value: "",
    });
  };

  return { isOpen, setIsOpen, form, onSubmit };
}

export default usePlaylist;
