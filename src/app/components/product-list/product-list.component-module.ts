import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { ProductListComponent } from './product-list.component';
import { RouterLink } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    CommonModule,
    RouterLink,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
