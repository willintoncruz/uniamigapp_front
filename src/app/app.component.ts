import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PruebaPage } from '../pages/prueba/prueba';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // localStorage.setItem('url','https://aqueous-spire-19252.herokuapp.com/')
      localStorage.setItem('url','http://localhost:3000/')
      localStorage.setItem('jwt','')     
      localStorage.setItem('id','')  
      localStorage.setItem('personaLE','')  

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

