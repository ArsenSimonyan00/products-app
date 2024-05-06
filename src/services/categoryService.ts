import axios, { AxiosError } from "axios";
import { Category } from "../types/types";

class CategoryService {
  static async getAllCategories() {
    try {
      const response = await axios.get<Category[]>(
        "https://test2.sionic.ru/api/Categories"
      );
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      throw new Error(error.message);
    }
  }
}

export default CategoryService;
