import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatedClientComponent } from './created-client.component';
import {RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    CreatedClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CreatedClientComponent
    }]),
    MatDividerModule
  ]
})
export class CreatedClientModule { }
