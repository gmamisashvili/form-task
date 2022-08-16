import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientFormService} from '../service/client-form.service';
import {ClientFormModel} from './entity/types';
import {CLIENTS, COORDINATORS, GENDER} from './entity/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent {

  readonly genders = GENDER;
  readonly coordinators = COORDINATORS;
  readonly clients = CLIENTS;

  clientForm: FormGroup = new FormGroup<ClientFormModel>({
    lastName: new FormControl(null, {
      validators: [Validators.required]
    }),
    name: new FormControl(null, {
      validators: [Validators.required]
    }),
    middleName: new FormControl(null),
    birthDate: new FormControl(null, {
      validators: [Validators.required]
    }),
    clientGroup: new FormControl(null, {
      validators: [Validators.required]
    }),
    coordinator: new FormControl(null),
    gender: new FormControl(null),
    phone: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
    }),
    smsSubscription: new FormControl(false, {
      validators: [Validators.required]
    })
  })

  constructor(private readonly clientFormService: ClientFormService,
              private readonly router: Router) {
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.clientFormService.setClientFormData(this.clientForm.value);
      this.router.navigate(['/client-form/address']).then()
    }
  }
}
