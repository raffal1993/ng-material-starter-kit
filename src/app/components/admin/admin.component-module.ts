import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [AdminComponent],
  providers: [],
  exports: [AdminComponent]
})
export class AdminComponentModule {
}
