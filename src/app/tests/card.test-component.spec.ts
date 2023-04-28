import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardViewModel } from '../components/card/card.view-model';
import { AppTestingModule } from './app-testing.module';
import { CardTestComponent } from './card.test-component';

describe('CardComponent', () => {
  it('should render card', () => {
    const data: CardViewModel = { title: 'Hello', description: 'I am a card' };
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
    });

    const fixture = TestBed.createComponent(CardTestComponent);
    const component = fixture.componentInstance;
    component.data = data;

    fixture.detectChanges();

    const title = fixture.debugElement.query(
      By.css('[data-test-id="component"] h2')
    );
    const description = fixture.debugElement.query(
      By.css('[data-test-id="component"] p')
    );

    expect(title.nativeElement.textContent).toContain(data.title);
    expect(description.nativeElement.textContent).toContain(data.description);
  });
});
