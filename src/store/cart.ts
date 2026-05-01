import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string; // productId-size
  productId: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  addItem: (item: Omit<CartItem, "id" | "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  totalCount: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      addItem: (item, qty = 1) => {
        const id = `${item.productId}-${item.size}`;
        const existing = get().items.find((i) => i.id === id);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, qty: i.qty + qty } : i,
            ),
          });
        } else {
          set({ items: [...get().items, { ...item, id, qty }] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),
      updateQty: (id, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.id !== id) });
          return;
        }
        set({
          items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)),
        });
      },
      clear: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
      totalCount: () => get().items.reduce((sum, i) => sum + i.qty, 0),
    }),
    { name: "kathyayani-cart" },
  ),
);
