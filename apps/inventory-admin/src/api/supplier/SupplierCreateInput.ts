import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactEmail?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
};
