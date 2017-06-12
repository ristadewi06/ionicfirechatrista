import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyChdvCZRhV4GAfUXW2bMpbIlIYe7F6GJc0",
    authDomain: "cobaapp-ad5ae.firebaseapp.com",
    databaseURL: "https://cobaapp-ad5ae.firebaseio.com",
    projectId: "cobaapp-ad5ae",
    storageBucket: "cobaapp-ad5ae.appspot.com",
  };
  firebase.initializeApp(config);


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

