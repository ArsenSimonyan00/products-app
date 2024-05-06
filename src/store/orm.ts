import { ORM } from "redux-orm";
import Category from "./categories/models";
import Product from "./products/models";

const orm = new ORM({
  stateSelector: (state) => state.orm,
});

orm.register(Category, Product);

export default orm;
