import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { DetailsPage } from '../details/details.page';
import { PasswordComponent } from '../../component/password/password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,

  ],
  declarations: [SignupPage, DetailsPage]
})
export class SignupPageModule {}
