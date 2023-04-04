import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">{{ data | distance }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistancePipeTestComponent {
  data: number | string = '';
}
