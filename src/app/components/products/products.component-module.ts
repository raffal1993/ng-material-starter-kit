import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatListModule,
    FlexModule,
    RouterModule,
    MatChipsModule
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent],
})
export class ProductsComponentModule { }
