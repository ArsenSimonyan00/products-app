import { createSelector } from "redux-orm";
import orm from "../orm";

export const selectAllCategories = createSelector(orm, (session) => {
  return session.Category.all()
    .toModelArray()
    .map((item: any) => item.ref);
});
