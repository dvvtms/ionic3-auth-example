import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EmailSignInComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sign-in',
  templateUrl: 'email-sign-in.html',
  providers: [FormBuilder]
})
export class EmailSignInComponent {

  public signInForm: FormGroup;
  public title = 'Sign in with email'

  constructor(private formBuilder: FormBuilder, public auth: AuthProvider, public toastCtrl: ToastController) {
    this.signInForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    })
  }

  signInFormSubmit() {

    if (!this.signInForm.valid) {
      this.createToast('Form not valid').present();
      return
    }
    else {
      this.auth.signInUser(this.signInForm.value.email, this.signInForm.value.password)
        .then(() => {
          this.createToast('Signed in with email: ' + this.signInForm.value.email).present()
        },
        (error) => {
          this.createToast(error.message).present();
        })
    }
  }


}


