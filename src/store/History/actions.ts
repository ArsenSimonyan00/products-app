import { OrderedProduct } from "../../types/types";

export enum HistoryActionTypes {
  addToHistory = "ADD_TO_HISTORY",
}

export type AddToHistory = {
  type: typeof HistoryActionTypes.addToHistory;
  payload: OrderedProduct[];
};

export const addToHistory = (product: OrderedProduct[]): AddToHistory => ({
  type: HistoryActionTypes.addToHistory,
  payload: product,
});
