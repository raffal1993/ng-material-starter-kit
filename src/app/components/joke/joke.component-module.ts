import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { JokeComponent } from './joke.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [MatCardModule, CommonModule, MatButtonToggleModule],
  declarations: [JokeComponent],
  providers: [],
  exports: [JokeComponent],
})
export class JokeComponentModule {}
