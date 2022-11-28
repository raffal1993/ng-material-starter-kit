import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [CryptoCurrencyComponent],
  providers: [],
  exports: [CryptoCurrencyComponent],
})
export class CryptoCurrencyComponentModule {}
