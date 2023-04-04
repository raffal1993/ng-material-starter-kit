import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.value | sort: data.direction }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortPipeTestComponent {
  data = { value: [], direction: undefined };
}
