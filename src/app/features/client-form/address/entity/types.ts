import {AbstractControl} from '@angular/forms';

export interface AddressFormModel {
  index: AbstractControl<string>;
  country: AbstractControl<string>;
  area: AbstractControl<string>;
  city: AbstractControl<string>;
  street: AbstractControl<string>;
  house: AbstractControl<string>,
}
