import Model, { attr } from "redux-orm";
import { FETCH_CATEGORIES } from "./actions";

class Category extends Model {
  static modelName = "Category";
  static fields = {
    id: attr(),
    name: attr(),
    parent_id: attr(),
  };

  static reducer(action: { type: string; payload: any }, Category: any) {
    switch (action.type) {
      case FETCH_CATEGORIES:
        {
          const { categories }: { categories: Category[] } = action.payload;
          if (!Category.test) {
            categories.forEach((category) => {
              Category.upsert(category);
            });
            Category.test = true;
          }
        }
        break;
    }
  }
}

export default Category;
