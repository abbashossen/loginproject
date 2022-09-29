import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SignupPageModule } from './pages/signup/signup.module';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import {NgApexchartsModule} from 'ng-apexcharts';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  FormsModule,
  SignupPageModule,
  NgApexchartsModule,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
