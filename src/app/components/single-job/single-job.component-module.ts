import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { SingleJobComponent } from './single-job.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [SingleJobComponent],
  providers: [],
  exports: [SingleJobComponent]
})
export class SingleJobComponentModule {
}
