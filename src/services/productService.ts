import axios, { AxiosError } from "axios";
import { Product, Range } from "../types/types";

const api = "https://test2.sionic.ru/api/Products";
class ProductService {
  static async getAllProducts(range: Range) {
    try {
      const response = await axios.get<Product[]>(`${api}`, {
        params: { range: JSON.stringify([range.from, range.to]) },
      });
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    }
  }

  static async getProductsByCategory(categoryId: number, range: Range) {
    try {
      const response = await axios.get<Product[]>(`${api}`, {
        params: {
          filter: JSON.stringify({ category_id: categoryId }),
          range: JSON.stringify([range.from, range.to]),
        },
      });
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    }
  }
  static async getProductsImages(productsId: number[]) {
    try {
      const response = await axios.get(
        `https://test2.sionic.ru/api/ProductImages`,
        {
          params: {
            filter: JSON.stringify({ product_id: productsId }),
          },
        }
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    }
  }
  static async getProductsPrices(productsId: number[]) {
    try {
      const response = await axios.get(
        `https://test2.sionic.ru/api/ProductVariations`,
        {
          params: {
            filter: JSON.stringify({ product_id: productsId }),
          },
        }
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    }
  }
}

export default ProductService;
