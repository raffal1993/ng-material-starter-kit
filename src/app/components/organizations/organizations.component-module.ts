import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrganizationsComponent } from './organizations.component';

@NgModule({
  imports: [MatExpansionModule, CommonModule],
  declarations: [OrganizationsComponent],
  providers: [],
  exports: [OrganizationsComponent]
})
export class OrganizationsComponentModule {
}
