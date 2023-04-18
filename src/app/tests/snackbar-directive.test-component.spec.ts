import { OverlayContainer } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SnackbarDirectiveTestComponent } from './snackbar-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('SnackbarDirective', () => {
  it('should show snackbar', () => {
    const data = 'Test';
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [SnackbarDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(SnackbarDirectiveTestComponent);
    const component = fixture.componentInstance;
    component.data = data;

    const oc = TestBed.inject(OverlayContainer);
    const overlayContainerElement = oc.getContainerElement();

    fixture.detectChanges();
    const element = fixture.debugElement.query(
      By.css(`button[data-test-id="directive-button"]`)
    );

    element.triggerEventHandler('click');
    fixture.detectChanges();

    expect(overlayContainerElement.textContent).toEqual(data);
  });
});
