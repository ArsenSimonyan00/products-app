import { RootState } from "../store";

export const selectOrders = (state: RootState) => state.history.orders;
