import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TareaProvider } from '../providers/tarea/tarea';
import { TareasArchivadasPage } from '../pages/tareas-archivadas/tareas-archivadas';
import { TareaHttpProvider } from '../providers/tarea-http/tarea-http';
import { HttpClientModule } from '@angular/common/http';
import { PruebaPage } from '../pages/prueba/prueba';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { WelcomePage } from '../pages/welcome/welcome';
import { PersonaPage } from '../pages/persona/persona';
import { PersonaHttpProvider } from '../providers/persona-http/persona-http';
import { ActividadPage } from '../pages/actividad/actividad';
import { ActividadHttpProvider } from '../providers/actividad-http/actividad-http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PruebaPage,
    TareasArchivadasPage,
    LoginPage,
    RegistroPage,
    WelcomePage,
    ActividadPage,
    PersonaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PruebaPage,
    TareasArchivadasPage,
    LoginPage,
    RegistroPage,
    WelcomePage,
    ActividadPage,
    PersonaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TareaProvider,
    TareaHttpProvider,
    AuthProvider,
    PersonaHttpProvider,
    ActividadHttpProvider
  ]
})
export class AppModule {}
