import { ProductWithCategoryModel } from '../models/product-with-category.model';

export interface ProductWithCategoryQueryModel {
  mainProduct: ProductWithCategoryModel;
  otherProducts: ProductWithCategoryModel[];
}
