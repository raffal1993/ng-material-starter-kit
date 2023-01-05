import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { CarsDifComponent } from './cars-dif.component';

@NgModule({
  imports: [MatListModule, MatCardModule, MatTableModule, CommonModule],
  declarations: [CarsDifComponent],
  providers: [],
  exports: [CarsDifComponent],
})
export class CarsDifComponentModule {}
