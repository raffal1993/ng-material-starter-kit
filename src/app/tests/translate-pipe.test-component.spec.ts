import { givenNativeElement } from './given';
import { PlaceholderImgPipeTestComponent } from './placeholder-img-pipe.test-component';
import { TranslatePipeTestComponent } from './translate-pipe.test-component';

describe('PlaceholderImgPipe', () => {
  [
    {
      givenData: {
        text: 'ONE',
        language: 'en',
      },
      thenData: 'One',
    },
    {
      givenData: {
        text: 'ONE',
        language: 'pl',
      },
      thenData: 'Jeden',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(
        givenNativeElement(givenData, TranslatePipeTestComponent, [
          {
            provide: 'TRANSLATION',
            useValue: {
              en: {
                ONE: 'One',
              },
              pl: {
                ONE: 'Jeden',
              },
            },
          },
        ]).innerHTML
      ).toContain(thenData);
    });
  });
});
