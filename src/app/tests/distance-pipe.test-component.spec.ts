import { DistancePipeTestComponent } from './distance-pipe.test-component';
import { givenNativeElement } from './given';

describe('DistancePipe', () => {
  [
    {
      givenData: '1',
      thenData: '1 m',
    },
    {
      givenData: '10',
      thenData: '10 m',
    },
    {
      givenData: '800',
      thenData: '0.8 km',
    },
    {
      givenData: '1000',
      thenData: '1 km',
    },
    {
      givenData: '2547',
      thenData: '2.55 km',
    },
    {
      givenData: '2833',
      thenData: '2.83 km',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`for string value ${givenData}`, () => {
      expect(
        givenNativeElement(givenData, DistancePipeTestComponent).innerHTML
      ).toEqual(thenData);
    });
  });

  [
    {
      givenData: 1,
      thenData: '1 m',
    },
    {
      givenData: 800,
      thenData: '0.8 km',
    },
    {
      givenData: 1000,
      thenData: '1 km',
    },
    {
      givenData: 2500,
      thenData: `2.5 km`,
    },
    {
      givenData: 2547,
      thenData: `2.55 km`,
    },
    {
      givenData: 2833,
      thenData: `2.83 km`,
    },
  ].forEach(({ givenData, thenData }) => {
    it(`for number value ${givenData}`, () => {
      expect(
        givenNativeElement(givenData, DistancePipeTestComponent).innerHTML
      ).toEqual(thenData);
    });
  });
});
