import { Directive, Input, HostListener } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Directive({ selector: '[deleteProduct]' })
export class DeleteProductDirective {
  @Input() deleteProduct: number | null = null;

  @HostListener('click')
  onClick() {
    if (!this.deleteProduct) return;
    this._productsService.deleteProduct(this.deleteProduct);
  }

  constructor(private _productsService: ProductsService) {}
}
