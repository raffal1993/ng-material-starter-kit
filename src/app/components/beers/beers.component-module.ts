import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BeersComponent } from './beers.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent],
})
export class BeersComponentModule {}
