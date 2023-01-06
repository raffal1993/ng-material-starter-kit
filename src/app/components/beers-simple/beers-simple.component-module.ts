import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BeersSimpleComponent } from './beers-simple.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [BeersSimpleComponent],
  providers: [],
  exports: [BeersSimpleComponent]
})
export class BeersSimpleComponentModule {
}
