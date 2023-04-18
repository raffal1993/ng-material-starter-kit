import { TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UrlValidatorDirectiveTestComponent } from './url-vaidator-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe(`UrlValidatorDirective`, () => {
  [
    {
      givenData: '',
      thenData: {
        firstErrorText: 'valid',
        secondErrorText: 'valid',
      },
    },
    {
      givenData: 'http',
      thenData: {
        firstErrorText: 'invalid',
        secondErrorText: 'invalid',
      },
    },
    {
      givenData: 'site.com',
      thenData: {
        firstErrorText: 'invalid',
        secondErrorText: 'valid',
      },
    },
    {
      givenData: 'http://',
      thenData: {
        firstErrorText: 'valid',
        secondErrorText: 'invalid',
      },
    },
    {
      givenData: 'http://site.com',
      thenData: {
        firstErrorText: 'valid',
        secondErrorText: 'valid',
      },
    },
  ].forEach(({ givenData, thenData }) => {
    it('should validate for ' + givenData, () => {
      TestBed.configureTestingModule({
        imports: [AppTestingModule],
        declarations: [UrlValidatorDirectiveTestComponent],
      }).compileComponents();

      const fixture = TestBed.createComponent(
        UrlValidatorDirectiveTestComponent
      );
      const component = fixture.componentInstance;
      component.formCtrl = new FormControl(givenData);

      fixture.detectChanges();
      const firstError = fixture.debugElement.query(
        By.css(`[data-test-id="first-error"]`)
      );
      const secondError = fixture.debugElement.query(
        By.css(`[data-test-id="second-error"]`)
      );
      expect(firstError.nativeElement.textContent).toEqual(
        thenData.firstErrorText
      );
      expect(secondError.nativeElement.textContent).toEqual(
        thenData.secondErrorText
      );
    });
  });
});
