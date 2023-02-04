import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './access-denied.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AccessDeniedComponent],
  providers: [],
  exports: [AccessDeniedComponent],
})
export class AccessDeniedComponentModule {}
