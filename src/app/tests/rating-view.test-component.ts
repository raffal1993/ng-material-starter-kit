import { Component } from '@angular/core';

@Component({
  template: `<rating-view
    [max]="data.max"
    [value]="data.value"
    (clicked)="onRatingClicked($event)"
  ></rating-view>`,
})
export class RatingViewTestingComponent {
  data!: {
    max: number;
    value: number;
  };

  onRatingClicked($event: number) {}
}
