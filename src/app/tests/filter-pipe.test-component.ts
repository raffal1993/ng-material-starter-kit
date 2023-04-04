import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.value | filter: data.criterion | json }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPipeTestComponent {
  data = { value: [], criterion: undefined };
}
