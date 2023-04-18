import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MoveDirectiveTestComponent } from './move-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('MoveDirective', () => {
  it('should move element', () => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [MoveDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(MoveDirectiveTestComponent);

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css(`button[data-test-id="directive-button"]`)
    );

    element.triggerEventHandler('mousedown', {
      offsetX: 10,
      offsetY: 10,
      clientX: 10,
      clientY: 10,
    });
    fixture.detectChanges();
    document.dispatchEvent(
      new MouseEvent('mousemove', { clientX: 100, clientY: 100 })
    );
    fixture.detectChanges();
    document.dispatchEvent(new MouseEvent('mouseup'));
    fixture.detectChanges();

    expect(element.nativeElement.style.transform).toEqual(
      `translate3d(90px, 90px, 0)`
    );
  });
});
