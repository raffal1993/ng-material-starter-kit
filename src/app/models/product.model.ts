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

export interface ProductFinalModel {
  name: string;
  price: number;
  stock: number;
}
