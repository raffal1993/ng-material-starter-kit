import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BlockPasteDirectiveTestComponent } from './block-paste-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('BlockPasteDirective', () => {
  it('should not allow pasting', () => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [BlockPasteDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(BlockPasteDirectiveTestComponent);

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css(`[data-test-id="directive"]`)
    );

    fixture.detectChanges();

    const testClipboardEvent = {
      preventDefault: jest.fn(),
    };
    element.triggerEventHandler('paste', testClipboardEvent);
    fixture.detectChanges();
    expect(testClipboardEvent.preventDefault).toHaveBeenCalledTimes(1);
  });
});
