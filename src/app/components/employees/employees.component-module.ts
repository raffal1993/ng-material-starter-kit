import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    NgForOf,
    AsyncPipe,
    CommonModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule { }
