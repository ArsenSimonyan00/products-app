import { Range } from "../../types/types";

export const IS_EMPTY = "IS_EMPTY";
export const SET_PRODUCT_LOADING = "SET_PRODUCT_LOADING";
export const SET_RANGE = "SET_RANGE";
export const SET_CATEGORY_ID = "SET_CATEGORY_ID";
export const IS_SHOW_MORE_CLICKED = "IS_SHOW_MORE_CLICKED";

export type IsEmptyType = {
  type: typeof IS_EMPTY;
  payload: boolean;
};

export const isEmpty = (payload: boolean): IsEmptyType => ({
  type: IS_EMPTY,
  payload: payload,
});

export type IsShowMoreClicked = {
  type: typeof IS_SHOW_MORE_CLICKED;
  payload: boolean;
};

export const isShowMoreClicked = (payload: boolean): IsShowMoreClicked => ({
  type: IS_SHOW_MORE_CLICKED,
  payload: payload,
});

export type ProductLoading = {
  type: typeof SET_PRODUCT_LOADING;
  payload: boolean;
};
export const productLoading = (payload: boolean): ProductLoading => ({
  type: SET_PRODUCT_LOADING,
  payload: payload,
});

export type SetRange = {
  type: typeof SET_RANGE;
  payload: Range;
};
export const setRange = (payload: Range): SetRange => ({
  type: SET_RANGE,
  payload: payload,
});

export type SetCategoryId = {
  type: typeof SET_CATEGORY_ID;
  payload: number;
};
export const setCategoryId = (payload: number): SetCategoryId => ({
  type: SET_CATEGORY_ID,
  payload: payload,
});
