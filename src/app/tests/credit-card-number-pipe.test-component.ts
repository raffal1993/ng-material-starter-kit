import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data | creditCardNumber }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardNumberPipeTestComponent {
  data = '';
}
