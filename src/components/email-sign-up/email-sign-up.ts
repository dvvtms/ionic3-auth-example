import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * 
 * Component for email sign up
 * 
 * @export
 * @class EmailSignUpComponent
 */
@Component({
  selector: 'email-sign-up',
  templateUrl: 'email-sign-up.html'
})
export class EmailSignUpComponent {

  public title = 'Sign up with email'
  public emailSignUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController) {

    // building the form
    this.emailSignUpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  /**
   * Toast creator
   * 
   * @param message
   */
  createToast(message: string) {
    return this.toastCtrl.create({
      message,
      duration: 3000
    })
  }

  emailSignUpFormSubmit() {
    // first we check, if the form is valid
    if (!this.emailSignUpForm.valid) {
      this.createToast('Form not valid').present();
      return
    }
    else {
      // if the form is valid, we continue with validation
      this.auth.signUpUser(this.emailSignUpForm.value.email, this.emailSignUpForm.value.password)
        .then(() => {
          // showing succesfull message
          this.createToast('Signed up with email: ' + this.emailSignUpForm.value.email).present()
          // closing dialog
          this.viewCtrl.dismiss()
        },
        /**
         * Handle Authentication errors
         * Here you can customise error messages like our example.
         * https://firebase.google.com/docs/reference/js/firebase.auth.Error
         * 
         * mismatch with error interface: https://github.com/angular/angularfire2/issues/976
         */
        (error) => {
          this.createToast(error.message).present();
        })
    }
  }

  cancelClicked() {
    this.viewCtrl.dismiss()
  }

}
