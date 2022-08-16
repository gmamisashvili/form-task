import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page/welcome-page.component';
import {CreatedClientGuard} from './guards/created-client.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'client-form',
    loadChildren: () => import('./features/client-form/client-form.module').then(m => m.ClientFormModule)
  },
  {
    path: 'created-client',
    loadChildren: () => import('./features/created-client/created-client.module').then(m => m.CreatedClientModule),
    canActivate: [CreatedClientGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
