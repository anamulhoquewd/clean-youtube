"use client";

import CartList from "@/components/cart-list";
import { useStoreState } from "easy-peasy";

function Page() {
  const playlistsState = useStoreState((state) => state.playlists);
  const recantsState = useStoreState((state) => state.recants);

  const playlists = recantsState.items.map((item) => playlistsState.data[item]);

  return (
    <div className="flex flex-1 flex-col gap-4 px-2 mt-4">
      <CartList playlists={playlists} />
    </div>
  );
}

export default Page;
