import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: `<address-form [form]="form"></address-form>`,
})
export class AddressFormTestComponent {
  form!: FormGroup;
}
