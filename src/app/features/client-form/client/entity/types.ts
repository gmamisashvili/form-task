import {AbstractControl} from '@angular/forms';

export type GenderType = 'Male' | 'Female' | 'Another';

export type Clients = 'VIP Clients' | 'Loyal Clients' | 'New Clients';

export type Coordinators = 'Jhones' | 'Colinwood' | 'etc';

export interface ClientFormModel {
  lastName: AbstractControl<string>;
  name: AbstractControl<string>;
  middleName: AbstractControl<string>;
  birthDate: AbstractControl<Date>;
  phone: AbstractControl<string>;
  gender: AbstractControl<GenderType>,
  clientGroup: AbstractControl<Clients>;
  coordinator: AbstractControl<Coordinators>;
  smsSubscription: AbstractControl<boolean>;
}
