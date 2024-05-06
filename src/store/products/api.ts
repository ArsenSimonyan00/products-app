import ProductService from "../../services/productService";
import { Image, Product, ProductVars, Range } from "../../types/types";
import {
  IsEmptyType,
  IsShowMoreClicked,
  ProductLoading,
  isEmpty as isEmptyAction,
  isShowMoreClicked,
  productLoading,
} from "../state/actions";
import { FetchProducts, fetchProducts } from "./actions";

export function getProducts(
  range: Range,
  categoryId: number,
  isClicked: boolean
) {
  return async (
    dispatch: (
      action: FetchProducts | IsEmptyType | ProductLoading | IsShowMoreClicked
    ) => void
  ) => {
    try {
      dispatch(productLoading(true));

      const products: Product[] = categoryId
        ? await ProductService.getProductsByCategory(categoryId, range)
        : await ProductService.getAllProducts(range);

      const productIds: number[] = products.map((product) => product.id);
      const images: Image[] = await ProductService.getProductsImages(
        productIds
      );
      const prices: ProductVars[] = await ProductService.getProductsPrices(
        productIds
      );

      const mergedProducts = products.map((product) => {
        const matchingImage = images.find(
          (img) => img.product_id === product.id
        );
        const matchingPrices = prices.filter(
          (price) => price.product_id === product.id
        );
        const minPrice = matchingPrices.length
          ? matchingPrices.reduce((acc, current) =>
              acc.price < current.price ? acc : current
            )
          : { price: 0 };

        return {
          ...product,
          img: matchingImage ? matchingImage.image_url : "",
          price: minPrice.price,
        };
      });

      if (!mergedProducts.length) {
        dispatch(isEmptyAction(true));
        return;
      } else {
        dispatch(isEmptyAction(false));
      }
      dispatch(fetchProducts(mergedProducts, categoryId, isClicked));
      dispatch(isShowMoreClicked(false));
    } catch (error) {
      console.error("Error", error);
    } finally {
      dispatch(productLoading(false));
    }
  };
}
