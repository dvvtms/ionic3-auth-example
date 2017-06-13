import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailSignInComponent } from './email-sign-in';

@NgModule({
  declarations: [
    EmailSignInComponent,
  ],
  imports: [
    IonicPageModule.forChild(EmailSignInComponent),
  ],
  exports: [
    EmailSignInComponent
  ]
})
export class SignInComponentModule { }
