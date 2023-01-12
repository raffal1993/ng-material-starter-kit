import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { NamesComponent } from './names.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatProgressSpinnerModule, MatButtonModule],
  declarations: [NamesComponent],
  providers: [],
  exports: [NamesComponent]
})
export class NamesComponentModule {
}
