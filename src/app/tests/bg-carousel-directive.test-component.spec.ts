import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BgCarouselDirectiveTestComponent } from './bg-carousel-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('BgCarouselDirective', () => {
  it('should move element', () => {
    const data = ['rgb(0, 255, 255)', 'rgb(255, 0, 255)'];
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [BgCarouselDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(BgCarouselDirectiveTestComponent);
    const component = fixture.componentInstance;
    component.data = data;

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css(`[data-test-id="directive-button"]`)
    );

    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual(data[0]);

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' }));
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual(data[1]);

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowRight' }));
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual(data[0]);

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' }));
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual(data[1]);

    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'ArrowLeft' }));
    fixture.detectChanges();
    expect(element.nativeElement.style.backgroundColor).toEqual(data[0]);
  });
});
