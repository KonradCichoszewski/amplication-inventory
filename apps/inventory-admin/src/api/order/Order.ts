import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
