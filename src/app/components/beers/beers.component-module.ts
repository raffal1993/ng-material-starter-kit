import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { BeersComponent } from './beers.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatPaginatorModule, MatChipsModule],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent],
})
export class BeersComponentModule { }
