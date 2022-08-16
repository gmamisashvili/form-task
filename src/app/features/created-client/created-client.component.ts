import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ClientFormService} from '../client-form/service/client-form.service';

@Component({
  selector: 'app-created-client',
  templateUrl: './created-client.component.html',
  styleUrls: ['./created-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatedClientComponent {
  clientData$ = this.clientFormService.getClientFormData$();
  addressData$ = this.clientFormService.getAddressFormData$();
  identityData$ = this.clientFormService.getIdentityFormData$();

  constructor(private readonly clientFormService: ClientFormService) {
  }
}
