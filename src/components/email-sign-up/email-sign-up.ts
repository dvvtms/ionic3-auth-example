import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(private formBuilder: FormBuilder, public auth: AuthProvider) {
    this.emailSignUpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  emailSignUpFormSubmit() {
    if (!this.emailSignUpForm.valid) {
      return
    }
    else {
      this.auth.signUpUser(this.emailSignUpForm.value.email, this.emailSignUpForm.value.password)
        .then(() => { },
        (error) => { })
    }
  }

}
