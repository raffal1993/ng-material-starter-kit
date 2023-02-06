import { ErrorPasswordsMatchPipe } from './error-passwords-match.pipe';

describe('ErrorPasswordsMatchPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorPasswordsMatchPipe();
    expect(pipe).toBeTruthy();
  });
});
