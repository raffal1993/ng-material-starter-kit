import { Component } from '@angular/core';
import { CardViewModel } from '../components/card/card.view-model';

@Component({
  template: `<card data-test-id="component" [card]="data"></card>`,
})
export class CardTestComponent {
  data!: CardViewModel;
}
