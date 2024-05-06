import { createSelector } from "redux-orm";
import orm from "../orm";

export const selectAllProducts = createSelector(orm, (session) => {
  return session.Product.all()
    .toModelArray()
    .map((item: any) => item.ref);
});
