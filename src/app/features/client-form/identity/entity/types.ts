import {AbstractControl} from '@angular/forms';

export type DocumentType = 'Passport' | 'Birth Certificate' | 'Driving license'

export interface IdentityFormModel {
  documentType: AbstractControl<DocumentType>;
  series: AbstractControl<string>;
  number: AbstractControl<number>;
  issuedBy: AbstractControl<string>;
  dateOfIssue: AbstractControl<Date>;
  file: AbstractControl<File>,
}
