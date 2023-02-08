import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthMultiRouteLoggedInComponent } from './auth-multi-route-logged-in.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule],
  declarations: [AuthMultiRouteLoggedInComponent],
  providers: [],
  exports: [AuthMultiRouteLoggedInComponent],
})
export class AuthMultiRouteLoggedInComponentModule {}
