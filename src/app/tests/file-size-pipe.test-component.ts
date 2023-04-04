import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<p data-test-id="pipe-container">{{ data | fileSize }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileSizePipeTestComponent {
  data = 0;
}
