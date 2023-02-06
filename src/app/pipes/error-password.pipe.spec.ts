import { ErrorPasswordPipe } from './error-password.pipe';

describe('ErrorPasswordPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorPasswordPipe();
    expect(pipe).toBeTruthy();
  });
});
