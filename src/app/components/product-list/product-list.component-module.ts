import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductListComponent } from './product-list.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    CommonModule,
    RouterLink,
    MatButtonToggleModule,
    MatButtonModule,
    MatGridListModule,
  ],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
