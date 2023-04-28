import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { AvatarTestComponent } from './avatar.test-component';
import { AppTestingModule } from './app-testing.module';

describe('AvatarComponent', () => {
  it('should render', () => {
    const data = {
      imageUrl: 'http://some-image.png',
      text: 'Avatar',
    };
    const testBed = TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [AvatarTestComponent],
    });

    const fixture = testBed.createComponent(AvatarTestComponent);
    fixture.componentInstance.data = data;

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css('[data-test-id="component"]')
    );

    expect(element.nativeElement.textContent).toContain(data.text);
  });
});
