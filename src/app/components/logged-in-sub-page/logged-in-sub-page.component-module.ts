import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoggedInSubPageComponent } from './logged-in-sub-page.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [LoggedInSubPageComponent],
  providers: [],
  exports: [LoggedInSubPageComponent]
})
export class LoggedInSubPageComponentModule {
}
