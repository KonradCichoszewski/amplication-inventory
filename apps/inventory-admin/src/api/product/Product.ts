import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";
import { Order } from "../order/Order";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  supplier?: Supplier | null;
  updatedAt: Date;
};
