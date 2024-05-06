import { RootState } from "../store";

export const selectIsEmpty = (state: RootState) => state.state.isEmpty;
export const selectProductLoading = (state: RootState) =>
  state.state.productLoading;
export const selectProductRange = (state: RootState) => state.state.range;
export const selectCategoryId = (state: RootState) => state.state.categoryId;
export const selectIsShowMoreClicked = (state: RootState) =>
  state.state.isShowMoreClicked;
