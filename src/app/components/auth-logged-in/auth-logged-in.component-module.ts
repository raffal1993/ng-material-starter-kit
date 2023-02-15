import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthLoggedInComponent } from './auth-logged-in.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonModule, RouterModule],
  declarations: [AuthLoggedInComponent],
  providers: [],
  exports: [AuthLoggedInComponent],
})
export class AuthLoggedInComponentModule {}
