import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
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
import { Calendar } from '@ionic-native/calendar';
import { NumJugadoresProvider } from '../providers/num-jugadores/num-jugadores';
import { ListajugadoresProvider } from '../providers/listajugadores/listajugadores';
import { ListajornadasProvider } from '../providers/listajornadas/listajornadas';
import { EditjugadormodalPage } from '../pages/editjugadormodal/editjugadormodal';
import { JornadasmodalPage } from '../pages/jornadasmodal/jornadasmodal';
import { AddequiposmodalPage } from '../pages/addequiposmodal/addequiposmodal';
import { RegistroPage } from '../pages/registro/registro';
import { EditequipomodalPage } from '../pages/editequipomodal/editequipomodal';
import { CapitanesPage } from '../pages/capitanes/capitanes';
import { CapitanesmodalPage } from '../pages/capitanesmodal/capitanesmodal';
import { EditjornadamodalPage } from '../pages/editjornadamodal/editjornadamodal';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    JugadoresPage,
    CalendarioPage,
    EquipoPage,
    AddequiposmodalPage,
    JornadasPage,
    JugadoresmodalPage,
    CalendariomodalPage,
    DatosjugadormodalPage,
    EditjugadormodalPage,
    JornadasmodalPage,
    RegistroPage,
    EditequipomodalPage,
    CapitanesPage,
    CapitanesmodalPage,
    EditjornadamodalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxErrorsModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage,
    JugadoresPage,
    CalendarioPage,
    EquipoPage,
    JornadasPage,
    JugadoresmodalPage,
    AddequiposmodalPage,
    CalendariomodalPage,
    DatosjugadormodalPage,
    EditjugadormodalPage ,
    JornadasmodalPage,
    RegistroPage,
    EditequipomodalPage,
    CapitanesPage,
    CapitanesmodalPage,
    EditjornadamodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AngularFireAuth,
    Calendar,
    NumJugadoresProvider,
    ListajugadoresProvider,
    ListajornadasProvider
  ]
})
export class AppModule {}
