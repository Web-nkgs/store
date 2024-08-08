import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addoToCart: (cartItem: CartItem) => void;
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addoToCart: (cartItem: CartItem) =>
    set((state) => ({ cart: [...state.cart, cartItem] })),
}));
