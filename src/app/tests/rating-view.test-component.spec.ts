import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppTestingModule } from "./app-testing.module";
import { RatingViewTestingComponent } from "./rating-view.test-component";

describe(`RatingViewTestComponent`, () => {
  [
    {
      givenData: {
        max: 4,
        value: 3,
      },
      thenData: ["icon-star", "icon-star", "icon-star", "icon-star-empty"],
    },
    {
      givenData: {
        max: 3,
        value: 2.5,
      },
      thenData: ["icon-star", "icon-star", "icon-star-half-empty"],
    },
    {
      givenData: {
        max: 3,
        value: 2.1,
      },
      thenData: ["icon-star", "icon-star", "icon-star-half-empty"],
    },
    {
      givenData: {
        max: 3,
        value: 3,
      },
      thenData: ["icon-star", "icon-star", "icon-star"],
    },
    {
      givenData: {
        max: 3,
        value: 0,
      },
      thenData: ["icon-star-empty", "icon-star-empty", "icon-star-empty"],
    },
    {
      givenData: {
        max: 3,
        value: 0.2,
      },
      thenData: ["icon-star-half-empty", "icon-star-empty", "icon-star-empty"],
    },
  ].forEach(({ givenData, thenData }, i) => {
    it("should render #" + (i + 1), () => {
      const fixture = TestBed.configureTestingModule({
        imports: [AppTestingModule],
      }).createComponent(RatingViewTestingComponent);

      fixture.componentInstance.data = givenData;
      fixture.detectChanges();

      const stars = fixture.debugElement.queryAll(By.css("i"));

      expect(stars.length).toEqual(givenData.max);
      thenData.forEach((css, i) =>
        expect(stars[i].nativeElement.getAttribute("class")).toEqual(css)
      );
    });
  });

  [
    {
      givenData: 0,
      thenData: ["icon-star", "icon-star-empty", "icon-star-empty"],
    },
    {
      givenData: 1,
      thenData: ["icon-star", "icon-star", "icon-star-empty"],
    },
    {
      givenData: 2,
      thenData: ["icon-star", "icon-star", "icon-star"],
    },
  ].forEach(({ givenData, thenData }, i) => {
    it("should change after click #" + (i + 1), () => {
      const fixture = TestBed.configureTestingModule({
        imports: [AppTestingModule],
      }).createComponent(RatingViewTestingComponent);
      const data = {
        value: 0,
        max: 3,
      };
      fixture.componentInstance.data = data;
      const clickedSpy = jest.spyOn(
        fixture.componentInstance,
        "onRatingClicked"
      );

      fixture.detectChanges();

      const stars = fixture.debugElement.queryAll(By.css("i"));

      stars[givenData].triggerEventHandler("click");
      fixture.detectChanges();

      const newStars = fixture.debugElement.queryAll(By.css("i"));

      expect(stars.length).toEqual(data.max);
      thenData.forEach((css, i) => {
        expect(newStars[i].nativeElement.getAttribute("class")).toEqual(css);
      });
      expect(clickedSpy).toHaveBeenCalledWith(givenData + 1);
    });
  });
});
