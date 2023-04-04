import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.text | translate: data.language }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatePipeTestComponent {
  data = { text: '', language: '' };
}
