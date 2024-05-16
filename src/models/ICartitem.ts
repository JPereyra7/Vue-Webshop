import type { IProduct } from "./IProducts";

export interface ICartItem {
  product: IProduct;
  amount: number;
}
