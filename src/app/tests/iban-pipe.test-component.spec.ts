import { givenNativeElement } from './given';
import { IbanPipeTestComponent } from './iban-pipe.test-component';

describe(`IbanPipe`, () => {
  [
    {
      givenData: 'PL22244522223333444455556666',
      thenData: 'PL22 2445 2222 3333 4444 5555 6666',
    },
    {
      givenData: '22244522223333444455556666',
      thenData: 'PL22 2445 2222 3333 4444 5555 6666',
    },
    {
      givenData: 'PL 2 2 2 4 4 5 2 2 2 2 3 3 3 3 4 4 4 4 5 5 5 5 6 6 6 6',
      thenData: 'PL22 2445 2222 3333 4444 5555 6666',
    },
    {
      givenData: '2224452222 333344 44555566 66',
      thenData: 'PL22 2445 2222 3333 4444 5555 6666',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(givenNativeElement(givenData, IbanPipeTestComponent).innerHTML).toContain(thenData);
    });
  });

  [
    {
      givenData: '2225568791',
      error: 'IBAN number is incorrect',
    },
    {
      givenData: 'PLL22244522223333444455556666',
      error: 'IBAN number is incorrect',
    },
    {
      givenData: 'PL 2224452222333344D455556666',
      error: 'IBAN number is incorrect',
    },
    {
      givenData: 'PL22-2445-2222-3333-4444-5555-6666',
      error: 'IBAN number is incorrect',
    },
    {
      givenData: 'Something wrong',
      error: 'IBAN number is incorrect',
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() => givenNativeElement(givenData, IbanPipeTestComponent)).toThrowError(error);
    });
  });
});
