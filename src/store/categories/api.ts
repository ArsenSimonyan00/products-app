import CategoryService from "../../services/categoryService";
import { FetchCategories, fetchCategories } from "./actions";

export function fetchAllCategories() {
  return async (dispatch: (action: any) => void) => {
    try {
      const categories = await CategoryService.getAllCategories();
      dispatch(fetchCategories(categories));
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  };
}
