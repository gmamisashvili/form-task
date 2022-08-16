import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { WelcomePageComponent } from './welcome-page/welcome-page/welcome-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {HttpClientModule} from '@angular/common/http';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
