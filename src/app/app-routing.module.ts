import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NamesComponent } from './components/names/names.component';
import { NamesComponentModule } from './components/names/names.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'query-loader-names', component: NamesComponent }]),
    NamesComponentModule,
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {}
