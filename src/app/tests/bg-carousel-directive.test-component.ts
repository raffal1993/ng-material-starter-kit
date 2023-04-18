import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `<div
    style="width:100px;height:100px"
    data-test-id="directive-button"
    [bgCarousel]="data"
  >
    Move me
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class BgCarouselDirectiveTestComponent {
  data = [] as string[];
}
