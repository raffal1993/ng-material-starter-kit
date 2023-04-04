import { givenNativeElement } from './given';
import { HashPipeTestComponent } from './hash-pipe.test-component';

describe(`HashPipe`, () => {
  [
    {
      givenData: { value: 'Text to Hash', method: 'md5' },
      thenData: 'da330e87edaafad50738838b833e4a5c',
    },
    {
      givenData: { value: 'Text to Hash', method: 'sha1' },
      thenData: 'c2b50e5d5d8babc2aa72142fccdef22af4675adf',
    },

    {
      givenData: { value: 'Text to Hash', method: 'sha256' },
      thenData: '4e25e6ef3ec4f197e159f9c60a31c6bf4095677f0a5aea549cf8952f654e7060',
    },

    {
      givenData: { value: 'Text to Hash', method: 'sha512' },
      thenData:
        'eb0aac272bab7c82cbc46a55ae22e08f500ae524f0bbce48db9944c0fb9577d0595ef96648f485acf8a3ee56781fe7cdc9652faae3d8b37062dcf995a94bfbf2',
    },
  ].forEach(({ givenData, thenData }) => {
    it(`should transform for ${givenData}`, () => {
      expect(givenNativeElement(givenData, HashPipeTestComponent).innerHTML).toContain(thenData);
    });
  });

  [
    {
      givenData: { value: 'Text to Hash', method: 'wrongAlgorithm' },
      error: 'Algorithm not found',
    },
  ].forEach(({ givenData, error }) => {
    it(`should throw error for ${givenData}`, () => {
      expect(() => givenNativeElement(givenData, HashPipeTestComponent)).toThrowError(error);
    });
  });
});
