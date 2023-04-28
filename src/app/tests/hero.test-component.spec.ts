import { By } from "@angular/platform-browser";
import { TestBed } from "@angular/core/testing";
import { HeroTestComponent } from "./hero.test-component";
import { AppTestingModule } from "./app-testing.module";

describe("SimpleHeroTestComponent", () => {
  it("should render", () => {
    const data = {
      imageUrl: "http://some-image.png",
      title: "Awesome Hero",
      buttonText: "Click me",
    };
    const testBed = TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [HeroTestComponent],
    });

    const fixture = testBed.createComponent(HeroTestComponent);
    fixture.componentInstance.data = data;

    fixture.detectChanges();

    const title = fixture.debugElement.query(
      By.css('[data-test-id="component"] h1')
    );
    const section = fixture.debugElement.query(
      By.css('[data-test-id="component"] section')
    );
    const heroButton = fixture.debugElement.query(
      By.css('[data-test-id="hero-button"]')
    );

    expect(title.nativeElement.textContent).toContain(data.title);
    expect(section.nativeElement.style.backgroundImage).toEqual(
      `url(${data.imageUrl})`
    );
    expect(heroButton.nativeElement.textContent).toEqual(data.buttonText);
  });
});
