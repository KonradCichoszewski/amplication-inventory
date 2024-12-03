import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
};
