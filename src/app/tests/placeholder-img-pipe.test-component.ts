import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<img
    data-test-id="pipe-container"
    src="{{ data | placeholderImg }}"
  />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderImgPipeTestComponent {
  data = '';
}
