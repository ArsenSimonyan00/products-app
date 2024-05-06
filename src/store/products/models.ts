import Model, { attr, fk } from "redux-orm";
import { FETCH_PRODUCTS } from "./actions";
import { Product as ProductType } from "../../types/types";

class Product extends Model {
  static modelName = "Product";
  static fields = {
    id: attr(),
    category_id: fk({
      to: "Category",
      as: "category",
      relatedName: "products",
    }),
    description: attr(),
    name: attr(),
  };

  static reducer(action: { type: string; payload: any }, Product: any) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        {
          const { products, categoryId, isClicked } = action.payload;
          if (categoryId) {
            if (!isClicked) {
              Product.all().delete();
            }
          }
          products.forEach((product: ProductType) => {
            Product.upsert(product);
          });
        }
        break;
      default:
        return Product;
    }
  }
}

export default Product;
