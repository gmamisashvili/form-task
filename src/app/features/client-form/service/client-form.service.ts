import { Injectable } from '@angular/core';
import {ClientFormModel} from '../client/entity/types';
import {BehaviorSubject, Observable} from 'rxjs';
import {AddressFormModel} from '../address/entity/types';
import {IdentityFormModel} from '../identity/entity/types';

@Injectable({
  providedIn: 'root'
})
export class ClientFormService {
  private clientFormData: BehaviorSubject<ClientFormModel> = new BehaviorSubject<ClientFormModel>(null);
  private addressFormData: BehaviorSubject<AddressFormModel> = new BehaviorSubject<AddressFormModel>(null);
  private identityFormData: BehaviorSubject<IdentityFormModel> = new BehaviorSubject<IdentityFormModel>(null);

  setClientFormData(value: ClientFormModel) {
    this.clientFormData.next(value);
  }

  getClientFormDataValue(): ClientFormModel {
    return this.clientFormData.value;
  }

  getClientFormData$(): Observable<ClientFormModel> {
    return this.clientFormData as Observable<ClientFormModel>;
  }

  setAddressFormData(value: AddressFormModel) {
    this.addressFormData.next(value);
  }

  getAddressFormDataValue(): AddressFormModel {
    return this.addressFormData.value;
  }

  getAddressFormData$(): Observable<AddressFormModel> {
    return this.addressFormData as Observable<AddressFormModel>;
  }

  setIdentityFormData(value: IdentityFormModel) {
    this.identityFormData.next(value);
  }

  getIdentityFormData$(): Observable<IdentityFormModel> {
    return this.identityFormData as Observable<IdentityFormModel>;
  }

  getIdentityFormValue(): IdentityFormModel {
    return this.identityFormData.value;
  }
}
