import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TelValidatorDirectiveTestComponent } from './tel-validator-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe(`TelValidatorDirectiveTestComponent`, () => {
  [
    {
      givenData: '621',
      thenData: 'invalid',
    },
    {
      givenData: '111-111-11',
      thenData: 'invalid',
    },
    {
      givenData: '111-111-1122',
      thenData: 'invalid',
    },
    {
      givenData: '11-111-1122',
      thenData: 'invalid',
    },
    {
      givenData: '111222333',
      thenData: 'invalid',
    },
    {
      givenData: '621-621-621',
      thenData: 'valid',
    },
  ].forEach(({ givenData, thenData }) => {
    it(
      'should validate for pattern [0-9]{3}-[0-9]{3}-[0-9]{3} and value ' +
        givenData,
      () => {
        TestBed.configureTestingModule({
          imports: [AppTestingModule],
          declarations: [TelValidatorDirectiveTestComponent],
        }).compileComponents();

        const fixture = TestBed.createComponent(
          TelValidatorDirectiveTestComponent
        );
        fixture.componentInstance.pattern = '[0-9]{3}-[0-9]{3}-[0-9]{3}';
        fixture.componentInstance.formCtrl = new FormControl(givenData);

        fixture.detectChanges();

        const telError = fixture.debugElement.query(
          By.css(`[data-test-id="tel-error"]`)
        );
        expect(telError.nativeElement.textContent).toEqual(thenData);
      }
    );
  });

  it('should not validate when there is no pattern', () => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [TelValidatorDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(TelValidatorDirectiveTestComponent);
    fixture.componentInstance.formCtrl = new FormControl('123');

    fixture.detectChanges();

    const telError = fixture.debugElement.query(
      By.css(`[data-test-id="tel-error"]`)
    );
    expect(telError.nativeElement.textContent).toEqual('valid');
  });
});
