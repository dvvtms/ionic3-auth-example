import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EmailSignUpComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'email-sign-up',
  templateUrl: 'email-sign-up.html'
})
export class EmailSignUpComponent {

  public title = 'Sign up with email'
  public emailSignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public auth: AuthProvider, public toastCtrl: ToastController) {
    this.emailSignUpForm = formBuilder.group({
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

  emailSignUpFormSubmit() {
    if (!this.emailSignUpForm.valid) {
      this.createToast('Form not valid').present();
      return
    }
    else {
      this.auth.signUpUser(this.emailSignUpForm.value.email, this.emailSignUpForm.value.password)
        .then(() => {
          this.createToast('Signed up with email: ' + this.emailSignUpForm.value.email).present()
        },
        (error) => {
          this.createToast(error.message).present();
        })
    }
  }

}
