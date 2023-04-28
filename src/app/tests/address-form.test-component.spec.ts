import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AddressFormTestComponent } from './address-form.test-component';
import { AppTestingModule } from './app-testing.module';

describe('AddressFormComponent', () => {
  it('should render form', () => {
    const fixture = TestBed.configureTestingModule({
      imports: [AppTestingModule],
    }).createComponent(AddressFormTestComponent);

    const data = {
      street: 'my street',
      city: 'Warsaw',
      countryId: 1,
    };

    const form = new FormGroup({
      street: new FormControl(data.street),
      city: new FormControl(data.city),
      countryId: new FormControl(data.countryId),
    });

    fixture.componentInstance.form = form;

    fixture.detectChanges();

    const inputs = fixture.debugElement.queryAll(By.css('input[type="text"]'));
    const select = fixture.debugElement.query(By.css('select'));

    expect(inputs[0].nativeElement.value).toEqual(data.street);
    expect(inputs[1].nativeElement.value).toEqual(data.city);
    expect(select.nativeElement.value).toEqual(data.countryId.toString());
  });
});
