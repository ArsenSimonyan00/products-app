import { OrderedProduct } from "../../types/types";
import { HistoryActionTypes } from "./actions";

type InitialState = {
  orders: OrderedProduct[];
};
const savedCartData = localStorage.getItem("history");
const parsedCartData = savedCartData ? JSON.parse(savedCartData) : [];

const initialState: InitialState = {
  orders: parsedCartData,
};

const HistoryReducer = (
  state = initialState,
  { type, payload }: { type: HistoryActionTypes; payload: any }
) => {
  switch (type) {
    case HistoryActionTypes.addToHistory:
      const orders = [...state.orders, ...payload];
      localStorage.setItem("history", JSON.stringify(orders));
      return {
        orders: orders,
      };

    default:
      return state;
  }
};

export default HistoryReducer;
