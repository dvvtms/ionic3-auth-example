import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { EmailSignInComponent } from '../../components/email-sign-in/email-sign-in';
import { EmailSignUpComponent } from '../../components/email-sign-up/email-sign-up';

/**
 * Generated class for the AuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
  entryComponents: [EmailSignInComponent, EmailSignUpComponent]
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  signInWithMailModal() {
    let modal = this.modalCtrl.create(EmailSignInComponent);
    modal.present();
  }

  signUpWithMailModal() {
    let modal = this.modalCtrl.create(EmailSignUpComponent);
    modal.present();
  }

}
