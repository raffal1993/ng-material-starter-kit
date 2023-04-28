import { Component } from '@angular/core';

@Component({
  template: `
    <hero
      data-test-id="component"
      [title]="data.title"
      [imageUrl]="data.imageUrl"
      ><button data-test-id="hero-button">{{ data.buttonText }}</button></hero
    >
  `,
})
export class HeroTestComponent {
  data!: { imageUrl: string; title: string; buttonText: string };
}
