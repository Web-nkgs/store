import { create } from "zustand";

type Store = {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {
    if (typeof window === "undefined") {
      return [];
    }

    const cart = localStorage.getItem("cart");
    console.log("cartyyy: ", cart);
    
    if (cart) {
      return JSON.parse(cart);
    }

    console.log("cartyyy empty???: ", cart);
    return [];
  })(),
  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.cart;
      const itemExistsInCart = currentCart.find(
        (item) => item.id === cartItem.id
      );
      const cartUpdated = itemExistsInCart
        ? currentCart.map((item) => {
            if (item.id === cartItem.id) {
              cartItem.quantity += item.quantity;
              return cartItem;
            }
            return item;
          })
        : [...currentCart, cartItem];
      
      saveCartToLocalStorage(cartUpdated);

      return { cart: cartUpdated };
    }),
  removeCartItem: (cartItem: CartItem) =>
    set((state) => {
      const currentCart = state.cart;
      const cartRemovedItem = currentCart.filter(
        (item) => item.id !== cartItem.id
      );
      saveCartToLocalStorage(cartRemovedItem);
      return { cart: cartRemovedItem };
    }),
}));
