import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppTestingModule } from './app-testing.module';
import { ReadMorePanelTestComponent } from './read-more-panel.test-component';

describe(`ReadMorePanelComponent`, () => {
  const data = {
    mainText: `Hello world`,
    readMoreText: `I am more text`,
    openLabel: 'Close',
    closedLabel: 'Open',
  };
  const expectOpenState = (
    data: any,
    paragraph: DebugElement,
    toggleButton: DebugElement
  ) => {
    expect(paragraph.nativeElement.textContent).toContain(data.mainText);
    expect(paragraph.nativeElement.textContent).not.toContain(
      data.readMoreText
    );
    expect(toggleButton.nativeElement.textContent).toEqual(data.openLabel);
  };
  const expectClosedState = (
    data: any,
    paragraph: DebugElement,
    toggleButton: DebugElement
  ) => {
    expect(paragraph.nativeElement.textContent).toContain(data.mainText);
    expect(paragraph.nativeElement.textContent).toContain(data.readMoreText);
    expect(toggleButton.nativeElement.textContent).toEqual(data.closedLabel);
  };
  let fixture: ComponentFixture<ReadMorePanelTestComponent>;
  let paragraph: DebugElement;
  let toggleButton: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [AppTestingModule],
    }).createComponent(ReadMorePanelTestComponent);

    fixture.componentInstance.data = data;

    fixture.detectChanges();

    paragraph = fixture.debugElement.query(By.css('section'));
    toggleButton = fixture.debugElement.query(By.css('button'));
  });

  it('should toggle state', () => {
    expectOpenState(data, paragraph, toggleButton);

    toggleButton.triggerEventHandler('click');
    fixture.detectChanges();

    expectClosedState(data, paragraph, toggleButton);

    toggleButton.triggerEventHandler('click');
    fixture.detectChanges();

    expectOpenState(data, paragraph, toggleButton);
  });

  it('should react to change of openLabel', () => {
    expectOpenState(data, paragraph, toggleButton);

    const newData = { ...data, openLabel: 'Test Open' };

    fixture.componentInstance.data = newData;
    fixture.detectChanges();

    expectOpenState(newData, paragraph, toggleButton);
  });
});
