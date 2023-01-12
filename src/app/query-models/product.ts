import { Observable } from 'rxjs';

export interface ProductQueryModel {
  name: string;
  price: number;
  stock: Observable<number>;
}
