interface Product {
  readonly productId: number;
  readonly quantity: number;
}

export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: Product[];
  readonly __v: number;
}
