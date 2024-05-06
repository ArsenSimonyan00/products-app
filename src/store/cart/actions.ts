import { Product as ProductType } from "../../types/types";

export enum CartActionTypes {
  addToCart = "ADD_TO_CART",
  removeFromCart = "REMOVE_FROM_CART",
  incrementQuantity = "INCREMENT_QUANTITY",
  decrementQuantity = "DECREMENT_QUANTITY",
  clearCart = "CLEAR_CART",
}

export type AddToCartType = {
  type: typeof CartActionTypes.addToCart;
  payload: ProductType;
};

export const addToCart = (product: ProductType) => ({
  type: CartActionTypes.addToCart,
  payload: product,
});

export type RemoveFromCartType = {
  type: typeof CartActionTypes.removeFromCart;
  payload: number;
};

export const removeFromCart = (id: number): RemoveFromCartType => ({
  type: CartActionTypes.removeFromCart,
  payload: id,
});

export type IncrementQuantityType = {
  type: typeof CartActionTypes.incrementQuantity;
  payload: number;
};

export const incrementQuantity = (id: number): IncrementQuantityType => ({
  type: CartActionTypes.incrementQuantity,
  payload: id,
});
export type DecrementQuantityType = {
  type: typeof CartActionTypes.decrementQuantity;
  payload: number;
};

export const decrementQuantity = (id: number): DecrementQuantityType => ({
  type: CartActionTypes.decrementQuantity,
  payload: id,
});
export type ClearCartType = {
  type: typeof CartActionTypes.clearCart;
};

export const clearCart = (): ClearCartType => ({
  type: CartActionTypes.clearCart,
});
