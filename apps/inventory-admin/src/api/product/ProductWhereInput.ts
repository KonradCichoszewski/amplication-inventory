import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  supplier?: SupplierWhereUniqueInput;
};
