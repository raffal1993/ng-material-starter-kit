import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent],
})
export class ProductComponentModule { }
