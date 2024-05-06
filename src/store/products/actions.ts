import { Product } from "../../types/types";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const PRODUCTS_BY_CATEGORY = "PRODUCTS_BY_CATEGORY";

export type FetchProducts = {
  type: typeof FETCH_PRODUCTS;
  payload: {
    products: Product[];
    categoryId: number | undefined;
    isClicked: boolean;
  };
};

export const fetchProducts = (
  products: Product[],
  categoryId: number | undefined,
  isClicked: boolean
): FetchProducts => ({
  type: FETCH_PRODUCTS,
  payload: {
    products,
    categoryId,
    isClicked,
  },
});
export type ProductsByCategoryType = {
  type: typeof PRODUCTS_BY_CATEGORY;
  payload: {
    products: Product[];
  };
};

export const productsByCategory = (
  products: Product[]
): ProductsByCategoryType => ({
  type: PRODUCTS_BY_CATEGORY,
  payload: {
    products,
  },
});
