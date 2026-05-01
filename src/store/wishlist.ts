import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishlistState = {
  ids: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
};

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (productId) =>
        set({
          ids: get().ids.includes(productId)
            ? get().ids.filter((id) => id !== productId)
            : [...get().ids, productId],
        }),
      has: (productId) => get().ids.includes(productId),
    }),
    { name: "kathyayani-wishlist" },
  ),
);
