import { givenNativeElement } from './given';
import { PhoneNumberPipeTestComponent } from './phone-number-pipe.test-component';

describe(`PhoneNumberPipe`, () => {
  [
    {
      givenData: '692692692',
      thenData: '+48 692 692 692',
    },
    {
      givenData: '+48692692692',
      thenData: '+48 692 692 692',
    },
    {
      givenData: '0048 692 692 692',
      thenData: '+48 692 692 692',
    },
    {
      givenData: '222550000',
      thenData: '+48 (22) 255 00 00',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(
        givenNativeElement(givenData, PhoneNumberPipeTestComponent).innerHTML
      ).toContain(thenData);
    });
  });

  [
    {
      givenData: '2225568791',
      error: 'Invalid Phone Number',
    },
    {
      givenData: '0048 692 69 69',
      error: 'Invalid Phone Number',
    },
    {
      givenData: '+486926992',
      thenData: 'Invalid Phone Number',
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() =>
        givenNativeElement(givenData, PhoneNumberPipeTestComponent)
      ).toThrowError(error);
    });
  });
});
