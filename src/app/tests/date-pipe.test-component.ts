import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">
    {{ data.value | date: data.type:data.lang }}
  </p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePipeTestComponent {
  data = { value: '', type: undefined, lang: undefined };
}
