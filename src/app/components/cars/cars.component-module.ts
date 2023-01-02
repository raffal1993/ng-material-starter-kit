import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CarsComponent } from './cars.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatCardModule, MatTableModule],
  declarations: [CarsComponent],
  providers: [],
  exports: [CarsComponent],
})
export class CarsComponentModule {}
