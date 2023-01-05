import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonToggleModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent],
})
export class ProductsComponentModule { }
