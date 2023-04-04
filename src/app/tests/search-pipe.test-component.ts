import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.value | search: data.term }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPipeTestComponent {
  data = { value: '', term: '' };
}
