import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { VerifyComponent } from './verify.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [VerifyComponent],
  providers: [],
  exports: [VerifyComponent]
})
export class VerifyComponentModule {
}
