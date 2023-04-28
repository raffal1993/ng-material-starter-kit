import { Component } from "@angular/core";
import { ProductFormViewModel } from "../components/product-form/product-form.view-model";

@Component({
  template: `<product-form
    [model]="data"
    (submitted)="onProductFormSubmitted($event)"
  ></product-form>`,
})
export class ProductFormTestComponent {
  data: ProductFormViewModel | undefined;

  onProductFormSubmitted($event: Partial<ProductFormViewModel>) {}
}
