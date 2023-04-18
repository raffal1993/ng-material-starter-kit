import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DeleteProductDirectiveTestComponent } from './delete-product-directive.test-component';
import { AppTestingModule } from './app-testing.module';

describe('DeleteProductDirective', () => {
  it('should show enabled', fakeAsync(() => {
    const data = 1;
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [DeleteProductDirectiveTestComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(
      DeleteProductDirectiveTestComponent
    );
    const httpClient = TestBed.inject(HttpClient);
    const getSpy = jest.spyOn(httpClient, 'delete').mockReturnValue(of(void 0));
    const component = fixture.componentInstance;
    component.data = data;

    fixture.detectChanges();

    const element = fixture.debugElement.query(
      By.css(`[data-test-id="directive"]`)
    );
    fixture.detectChanges();

    element.triggerEventHandler('click');
    fixture.detectChanges();
    tick();

    expect(getSpy).toHaveBeenCalledWith(
      `https://fakestoreapi.com/products/${data}`
    );
  }));
});
