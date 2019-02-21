import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Jornada } from '../../interface/jornada.interfaces';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import * as moment from 'moment';
import { jornadas } from '../../models/jornadas';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the CalendariomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendariomodal',
  templateUrl: 'calendariomodal.html',
})
export class CalendariomodalPage {
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), Casa: false, Fuera: false, title:''}
  minDate = new Date().toISOString();
  jornada:Jornada;
  titulares:any = [];
  titular1:any;
  titular2:any;
  tirtular3:any;
  titular4:any;
  jorna: jornadas = {
    titulo: '',
    casa:false,
    fecha:null
  };

  constructor(private toastCtrl: ToastController,private afdb: AngularFireDatabase,public listajornadas:ListajornadasProvider,public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    console.log( this.event.startTime)
  }
  save(){
    this.jorna.titulo = this.event.title;
    if (this.event.Casa) {
      this.jorna.casa = true;
    }else{
      this.jorna.casa = false;
    }
    this.jorna.fecha = new Date(this.event.startTime);
    this.afdb.list("/jornada/").push(this.jorna);
    this.mostrar_mensaje(this.jorna.titulo + " añadida correctamente.");
    this.viewCtrl.dismiss();
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
  
}
