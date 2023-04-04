import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppTestingModule } from './app.testing-module';
import { MaxNumberPipeTestComponent } from './max-number-pipe.test-component';

describe('PluckPipe', () => {
  it('should transform', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [AppTestingModule],
    }).createComponent(MaxNumberPipeTestComponent);

    fixture.componentInstance.data = [1, 2, 3];

    fixture.detectChanges();

    // // fixture.componentInstance.object = { id: 2 };
    fixture.componentInstance.data.push(4);
    fixture.detectChanges();

    const container = fixture.debugElement.query(
      By.css('[data-test-id="pipe-container"]')
    );

    expect(container.nativeElement.textContent).toContain(`4`);
  });
});
