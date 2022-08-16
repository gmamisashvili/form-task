import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientFormRoutingModule} from './client-form-routing.module';
import {ClientComponent} from './client/client.component';
import {AddressComponent} from './address/address.component';
import {IdentityComponent} from './identity/identity.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgxMaskModule} from 'ngx-mask';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ClientComponent,
    AddressComponent,
    IdentityComponent
  ],
  imports: [
    CommonModule,
    ClientFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    NgxMaskModule,
    MatButtonModule
  ]
})
export class ClientFormModule {
}
