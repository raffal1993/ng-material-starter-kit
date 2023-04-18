import { InteractivityChecker } from '@angular/cdk/a11y';
import { OverlayContainer } from '@angular/cdk/overlay';
import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfirmDialogDirectiveTestComponent } from './confirm-dialog-directive.test.component';
import { AppTestingModule } from './app-testing.module';

describe(`ConfirmDialogDirective`, () => {
  [
    {
      buttonIndex: 0,
      buttonText: 'Cancel',
      eventValue: false,
    },
    {
      buttonIndex: 1,
      buttonText: 'Confirm',
      eventValue: true,
    },
  ].forEach((testData) =>
    it('should confirm', fakeAsync(() => {
      const data = 'Are you sure that you want to do this?';
      TestBed.configureTestingModule({
        imports: [AppTestingModule],
        declarations: [ConfirmDialogDirectiveTestComponent],
      })
        .overrideProvider(InteractivityChecker, {
          useValue: {
            isFocusable: () => true, // This checks focus trap, set it to true to  avoid the warning
          },
        })
        .compileComponents();

      const fixture = TestBed.createComponent(
        ConfirmDialogDirectiveTestComponent
      );
      const component = fixture.componentInstance;
      component.data = data;
      const onConfirmedSpy = jest.spyOn(component, 'onConfirmed');

      const oc = TestBed.inject(OverlayContainer);
      const overlayContainerElement = oc.getContainerElement();

      fixture.detectChanges();
      const element = fixture.debugElement.query(
        By.css(`button[data-test-id="directive"]`)
      );

      element.triggerEventHandler('click');
      fixture.detectChanges();

      expect(
        overlayContainerElement.querySelector('[mat-dialog-title]')?.textContent
      ).toContain(`Confirm your choice`);
      expect(
        overlayContainerElement.querySelector('mat-dialog-content')?.textContent
      ).toContain(data);
      const confirmButton = overlayContainerElement.querySelectorAll(
        'mat-dialog-actions [mat-button]'
      )[testData.buttonIndex];

      expect(confirmButton.textContent?.trim()).toEqual(testData.buttonText);

      (confirmButton as HTMLButtonElement).click();
      fixture.detectChanges();
      tick();
      expect(onConfirmedSpy).toHaveBeenCalledWith(testData.eventValue);

      flush();
    }))
  );
});
