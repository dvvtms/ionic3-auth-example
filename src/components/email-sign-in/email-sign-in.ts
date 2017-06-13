import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(private formBuilder: FormBuilder, public auth: AuthProvider) {
    this.signInForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signInFormSubmit() {
    if (!this.signInForm.valid) {
      return
    }
    else {
      this.auth.signInUser(this.signInForm.value.email, this.signInForm.value.password)
        .then(() => { },
        (error) => { })
    }
  }


}


