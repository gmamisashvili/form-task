import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {IdentityComponent} from './identity/identity.component';
import {AddressComponent} from './address/address.component';
import {AddressGuard} from './guards/address.service';
import {IdentityGuard} from './guards/identity.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'identity',
        component: IdentityComponent,
        canActivate: [IdentityGuard]
      },
      {
        path: 'address',
        component: AddressComponent,
        canActivate: [AddressGuard]
      },
      { path: '', redirectTo: 'client', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFormRoutingModule { }
