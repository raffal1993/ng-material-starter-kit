import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoggedInComponent } from './logged-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterModule],
  declarations: [LoggedInComponent],
  providers: [],
  exports: [LoggedInComponent],
})
export class LoggedInComponentModule {}
