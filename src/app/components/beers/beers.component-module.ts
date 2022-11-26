import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BeersComponent } from './beers.component';

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatPaginatorModule,
  ],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent],
})
export class BeersComponentModule {}
