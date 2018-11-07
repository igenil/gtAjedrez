import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { firebaseConfig } from '../config';

import { JugadoresPage } from '../pages/jugadores/jugadores';
import { CalendarioPage } from '../pages/calendario/calendario';
import { EquipoPage } from '../pages/equipo/equipo';
import { JornadasPage } from '../pages/jornadas/jornadas';
import { JugadoresmodalPage } from '../pages/jugadoresmodal/jugadoresmodal';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendariomodalPage } from '../pages/calendariomodal/calendariomodal';
import { DatosjugadormodalPage } from '../pages/datosjugadormodal/datosjugadormodal';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    JugadoresPage,
    CalendarioPage,
    EquipoPage,
    JornadasPage,
    JugadoresmodalPage,
    CalendariomodalPage,
    DatosjugadormodalPage 

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    JugadoresPage,
    CalendarioPage,
    EquipoPage,
    JornadasPage,
    JugadoresmodalPage,
    CalendariomodalPage,
    DatosjugadormodalPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth
  ]
})
export class AppModule {}
