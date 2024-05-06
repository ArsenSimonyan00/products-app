import { StateType } from "../../types/types";
import {
  IS_EMPTY,
  IS_SHOW_MORE_CLICKED,
  SET_CATEGORY_ID,
  SET_PRODUCT_LOADING,
  SET_RANGE,
} from "./actions";

const initialState: StateType = {
  isEmpty: false,
  categoryLoading: false,
  categoryError: false,
  productError: false,
  productLoading: false,
  categoryId: null,
  range: { from: 0, to: 15 },
  isShowMoreClicked: false,
};
const stateReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case IS_EMPTY:
      return { ...state, isEmpty: payload };
    case SET_PRODUCT_LOADING:
      return { ...state, productLoading: payload };
    case SET_RANGE:
      return {
        ...state,
        range: { from: payload.from, to: payload.to },
      };
    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: payload,
      };
    case IS_SHOW_MORE_CLICKED:
      return {
        ...state,
        isShowMoreClicked: payload,
      };
    default:
      return state;
  }
};

export default stateReducer;
