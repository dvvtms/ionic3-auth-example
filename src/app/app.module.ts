import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { environment } from '../environments/environment';
import { MyApp } from './app.component';

// angularfire
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';

// pages
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';

// auth components
import { EmailSignInComponent } from '../components/email-sign-in/email-sign-in';
import { EmailSignUpComponent } from '../components/email-sign-up/email-sign-up';


@NgModule({
  declarations: [
    MyApp,

    // pages
    HomePage,
    AuthPage,

    // components
    EmailSignInComponent,
    EmailSignUpComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    // auth/db modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    // pages
    HomePage,
    AuthPage,

    //components
    EmailSignInComponent,
    EmailSignUpComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    // auth provider
    AuthProvider
  ]
})
export class AppModule { }
