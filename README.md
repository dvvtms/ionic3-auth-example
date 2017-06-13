# Ionic 3 AngularFire 2 Authentication examples

## Features
* Email authentication with Angular form validator
* In-app notifications: show authentication results in modal
* ~~Facebook authentication~~
* ~~Google authentication~~
* ~~Password recovery~~

## Installation
#### Clone & npm install & run
```sh
$ git clone git@github.com:devvtms/ionic2-auth-example.git
$ cd ionic2-auth-example
$ npm install
$ ionic serve
```

## Before serve
Update Firebase 3 configuration in ```/src/environments/environment.ts```
```ts
 export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

## Ionic info
```
global packages:

    @ionic/cli-utils : 1.4.0
    Ionic CLI        : 3.4.0

System:

    Node       : v8.0.0
    OS         : macOS Sierra
    Xcode      : Xcode 8.3.3 Build version 8E3004b
    ios-deploy : not installed
    ios-sim    : not installed
    npm        : 5.0.3
```

## Older version
[i2a2ea](https://github.com/devvtms/i2a2ea)

## Issues
**White screen after ```ionic serve``` ?**
Dont forget Update Firebase 3 configuration.