"use client"; // 👈 এটা খুব জরুরি

import { StoreProvider } from "easy-peasy";
import store from "@/store";

export default function EasyPeasyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
