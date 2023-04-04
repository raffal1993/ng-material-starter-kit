import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.value | hash: data.method }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashPipeTestComponent {
  data = { value: '', method: '' };
}
