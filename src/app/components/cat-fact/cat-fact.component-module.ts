import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatFactComponent } from './cat-fact.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent]
})
export class CatFactComponentModule {
}
