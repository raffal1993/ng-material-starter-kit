import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { HeaderTestComponent } from './header.test-component';
import { HeaderComponent } from '../components/header/header.component';
import { ChangeDetectorRef } from '@angular/core';
import { AppTestingModule } from './app-testing.module';

describe('HeaderComponent', () => {
  it('should render', () => {
    const testBed = TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [HeaderTestComponent],
    });

    const fixture = testBed.createComponent(HeaderTestComponent);
    // const cdr = fixture.componentRef.changeDetectorRef;
    // const detachSpy = jest.spyOn(cdr, 'detach');

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h1'));

    // Doesnt seem to work

    expect(element.nativeElement.textContent).toContain('Hello I am a header');
  });

  // This works but we do not have the name
  // it('should render', () => {
  //   const cdr = {
  //     detach: jest.fn(),
  //   } as unknown as ChangeDetectorRef;

  //   new HeaderComponent(cdr);

  //   expect(cdr.detach).toHaveBeenCalled();
  // });
});
