import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data | iban }} 
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IbanPipeTestComponent {
  data = '';
}
