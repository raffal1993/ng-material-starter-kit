import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppTestingModule } from './app.testing-module';
import { PluckPipeTestComponent } from './pluck-pipe.test-component';

describe('PluckPipe', () => {
  it('should transform', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [AppTestingModule],
    }).createComponent(PluckPipeTestComponent);

    fixture.componentInstance.object = {
      id: 1,
    };

    fixture.detectChanges();

    // fixture.componentInstance.object = { id: 2 };
    fixture.componentInstance.object['id'] = 2;
    fixture.detectChanges();

    const container = fixture.debugElement.query(
      By.css('[data-test-id="pipe-container"]')
    );

    expect(container.nativeElement.textContent).toContain(`2`);
  });
});
