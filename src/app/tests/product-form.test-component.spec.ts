import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ProductFormViewModel } from '../components/product-form/product-form.view-model';
import { AppTestingModule } from './app-testing.module';
import { ProductFormTestComponent } from './product-form.test-component';

describe('ProductFormComponent', () => {
  const typeIntoInput = (input: DebugElement, text: string) => {
    input.nativeElement.value = text;
    input.triggerEventHandler('input', {
      target: { value: text },
    });
  };
  const given = (data: ProductFormViewModel | undefined = undefined) => {
    const fixture = TestBed.configureTestingModule({
      imports: [AppTestingModule],
    }).createComponent(ProductFormTestComponent);

    const submittedSpy = jest.spyOn(
      fixture.componentInstance,
      'onProductFormSubmitted'
    );

    fixture.componentInstance.data = data;

    fixture.detectChanges();

    const nameInput = fixture.debugElement.query(By.css('input[type="text"]'));
    const priceInput = fixture.debugElement.query(
      By.css('input[type="number"]')
    );
    const submitInput = fixture.debugElement.query(
      By.css('input[type="submit"]')
    );
    const form = fixture.debugElement.query(By.css('form'));

    return { fixture, submittedSpy, nameInput, priceInput, submitInput, form };
  };
  it('should render create form', () => {
    const { fixture, submittedSpy, nameInput, priceInput, submitInput, form } =
      given();
    const whenData = {
      name: 'My product',
      price: 10,
    };

    typeIntoInput(nameInput, whenData.name);
    fixture.detectChanges();

    typeIntoInput(priceInput, whenData.price.toString());
    fixture.detectChanges();

    expect(nameInput.nativeElement.value).toEqual(whenData.name);
    expect(priceInput.nativeElement.value).toEqual(whenData.price.toString());
    expect(submitInput.nativeElement.value).toEqual('Create');

    form.triggerEventHandler('submit');
    fixture.detectChanges();

    expect(submittedSpy).toHaveBeenCalledWith({
      id: null,
      name: whenData.name,
      price: whenData.price,
    });
  });

  it('should render update form', () => {
    const data = {
      id: 1,
      name: 'Awesome Product',
      price: 100,
    };

    const { fixture, submittedSpy, nameInput, priceInput, submitInput, form } =
      given(data);

    const whenData = {
      name: 'My product',
      price: 10,
    };

    fixture.detectChanges();

    expect(nameInput.nativeElement.value).toEqual(data.name);
    expect(priceInput.nativeElement.value).toEqual(data.price.toString());

    typeIntoInput(nameInput, whenData.name);
    fixture.detectChanges();

    typeIntoInput(priceInput, whenData.price.toString());
    fixture.detectChanges();

    expect(nameInput.nativeElement.value).toEqual(whenData.name);
    expect(priceInput.nativeElement.value).toEqual(whenData.price.toString());
    expect(submitInput.nativeElement.value).toEqual('Update');

    form.triggerEventHandler('submit');
    fixture.detectChanges();

    expect(submittedSpy).toHaveBeenCalledWith({
      id: data.id,
      name: whenData.name,
      price: whenData.price,
    });
  });
});
