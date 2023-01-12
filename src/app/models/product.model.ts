export interface ProductModel {
  name: string;
  price: number;
  colorId: string;
  storeId: string;
  id: string;
}

export interface ProductMetadataModel {
  stock: number;
  delivery: number;
  id: string;
  productId: string;
}
