import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SupplierWhereInput = {
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
