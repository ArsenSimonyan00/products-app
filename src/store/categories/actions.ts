import { Category } from "../../types/types";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export type FetchCategories = {
  type: typeof FETCH_CATEGORIES;
  payload: {
    categories: Category[];
  };
};

export const fetchCategories = (categories: Category[]) => ({
  type: FETCH_CATEGORIES,
  payload: {
    categories,
  },
});
