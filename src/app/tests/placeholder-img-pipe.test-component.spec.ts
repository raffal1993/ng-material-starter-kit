import { givenNativeElement } from './given';
import { PlaceholderImgPipeTestComponent } from './placeholder-img-pipe.test-component';

describe('PlaceholderImgPipe', () => {
  [
    {
      givenData: `/assets/img/test.jpg`,
      thenData: '/assets/img/test.jpg',
    },
    {
      givenData: null,
      thenData: `/assets/img/placeholder.png`,
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(
        (
          givenNativeElement(
            givenData,
            PlaceholderImgPipeTestComponent
          ) as HTMLImageElement
        ).src
      ).toContain(thenData);
    });

    it(`should swap injection token`, () => {
      expect(
        (
          givenNativeElement(null, PlaceholderImgPipeTestComponent, [
            {
              provide: 'PLACEHOLDER_IMAGE_SOURCE',
              useValue: '/assets/img/alternative-placeholder.png',
            },
          ]) as HTMLImageElement
        ).src
      ).toContain('/assets/img/alternative-placeholder.png');
    });
  });
});
