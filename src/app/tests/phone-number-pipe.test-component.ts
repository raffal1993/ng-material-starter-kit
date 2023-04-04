import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data | phoneNumber }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberPipeTestComponent {
  data = '';
}
