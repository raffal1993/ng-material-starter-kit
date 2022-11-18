import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  constructor(private _productService: ProductService) {}

  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    image: new FormControl(),
  });

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService
      .create({
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        category: productForm.get('category')?.value,
        description: productForm.get('description')?.value,
        image: productForm.get('image')?.value,
      })
      .subscribe();
  }
}
