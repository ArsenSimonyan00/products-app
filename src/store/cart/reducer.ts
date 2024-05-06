import { CartProduct } from "../../types/types";
import { CartActionTypes } from "./actions";

type InitialState = {
  cart: CartProduct[];
};
const savedCartData = localStorage.getItem("cart");
const parsedCartData = savedCartData ? JSON.parse(savedCartData) : [];

const initialState: InitialState = {
  cart: parsedCartData,
};

const cartReducer = (
  state = initialState,
  { type, payload }: { type: CartActionTypes; payload: any }
) => {
  switch (type) {
    case CartActionTypes.addToCart:
      let updatedCart = state.cart.map((product) =>
        product.id === payload.id
          ? {
              ...product,
              quantity: (product.quantity || 0) + 1,
              totalPrice: (product.quantity + 1) * product.price,
            }
          : product
      );
      if (!updatedCart.some((product) => product.id === payload.id)) {
        payload = { ...payload, quantity: 1, totalPrice: payload.price };
        updatedCart.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        cart: updatedCart,
      };
    case CartActionTypes.removeFromCart:
      const filteredCart = state.cart.filter(
        (product) => product.id !== payload
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        cart: filteredCart,
      };
    case CartActionTypes.incrementQuantity:
      let newCart = state.cart.map((product) =>
        product.id === payload
          ? {
              ...product,
              quantity: product.quantity + 1,
              totalPrice: (product.quantity + 1) * product.price,
            }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        cart: newCart,
      };
    case CartActionTypes.decrementQuantity:
      let new_Cart = state.cart.map((product) =>
        product.id === payload
          ? {
              ...product,
              quantity: product.quantity - 1,
              totalPrice: (product.quantity - 1) * product.price,
            }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(new_Cart));
      return {
        cart: new_Cart,
      };
    case CartActionTypes.clearCart:
      localStorage.removeItem("cart");
      return {
        cart: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
