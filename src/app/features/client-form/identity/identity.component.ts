import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientFormService} from '../service/client-form.service';
import {Router} from '@angular/router';
import {IdentityFormModel} from './entity/types';
import {of, tap, timer} from 'rxjs';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdentityComponent  {
  readonly DOCUMENT_TYPES = ['Passport', 'Birth Certificate', 'Driving license']

  identityForm: FormGroup = new FormGroup<IdentityFormModel>({
    documentType: new FormControl(null, {
      validators: [Validators.required]
    }),
    series: new FormControl(null),
    number: new FormControl(null, {
      validators: [Validators.required]
    }),
    issuedBy: new FormControl(null),
    dateOfIssue: new FormControl(null, {
      validators: [Validators.required]
    }),
    file: new FormControl(null)
  })
  showMessage: boolean;

  constructor(private readonly clientFormService: ClientFormService,
              private readonly router: Router) {
  }

  onSubmit() {
    if (this.identityForm.valid) {
      this.clientFormService.setIdentityFormData(this.identityForm.value);
      this.showMessage = true;

      const sub = timer(3000).pipe(
        tap(() => {
          this.router.navigate(['/created-client']).then();
          sub.unsubscribe();
        })
      ).subscribe()
    }
  }
}
