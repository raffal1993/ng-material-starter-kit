import { DatePipeTestComponent } from './date-pipe.test-component';
import { givenNativeElement } from './given';

describe(`DatePipe`, () => {
  [
    {
      givenData: { value: '12 12 12' },
      thenData: 'Wed Dec 12 2012',
    },
    {
      givenData: { value: '12-12-12', type: 'locale', lang: 'pl' },
      thenData: '12.12.2012',
    },
    {
      givenData: { value: '12-12-12', type: 'locale', lang: 'us' },
      thenData: '12/12/2012',
    },
    {
      givenData: { value: '12.12.12', type: 'locale', lang: 'us' },
      thenData: '12/12/2012',
    },
    {
      givenData: { value: '12 12 12', type: 'locale', lang: 'us' },
      thenData: '12/12/2012',
    },
    {
      givenData: { value: '2024 12 14', type: 'locale', lang: 'pl' },
      thenData: '14.12.2024',
    },
    {
      givenData: { value: '05 October 2011 14:48 UTC', type: 'locale', lang: 'pl' },
      thenData: '5.10.2011',
    },
    {
      givenData: { value: '11 15 2024 ', type: 'locale' },
      thenData: '15.11.2024',
    },
    {
      givenData: { value: '04 05 2023', type: 'iso' },
      thenData: '2023-04-04',
    },
    {
      givenData: { value: '05 October 2011', type: 'iso' },
      thenData: '2011-10-04',
    },
    {
      givenData: { value: '05 October 2011 14:48 UTC', type: 'iso' },
      thenData: '2011-10-05',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(givenNativeElement(givenData, DatePipeTestComponent).innerHTML).toContain(thenData);
    });
  });

  [
    {
      givenData: { value: '14.14.14', type: 'locale', lang: 'pl' },
      error: 'Invalid Date',
    },
    {
      givenData: { value: '144.144.144', type: 'locale', lang: 'pl' },
      error: 'Invalid Date',
    },
    {
      givenData: { value: '144.144', type: 'locale', lang: 'pl' },
      error: 'Invalid Date',
    },
    {
      givenData: { value: 'NOT a date', type: 'locale', lang: 'pl' },
      error: 'Invalid Date',
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() => givenNativeElement(givenData, DatePipeTestComponent)).toThrowError(error);
    });
  });
});
