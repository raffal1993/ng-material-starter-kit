import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppTestingModule } from './app-testing.module';

export const givenNativeElement = (
  data: unknown,
  componentType: Type<{ data: unknown }>,
  providers: any[] = []
): HTMLElement => {
  const testBed = TestBed.configureTestingModule({
    imports: [AppTestingModule],
    providers,
  });

  const fixture = testBed.createComponent(componentType);

  const component = fixture.componentInstance;

  component.data = data;

  fixture.detectChanges();

  const element = fixture.debugElement.query(
    By.css('[data-test-id="pipe-container"]')
  );

  return element.nativeElement;
};
