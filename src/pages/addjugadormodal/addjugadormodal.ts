import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams,  ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { jugador } from '../../models/jugador';
import { CalendarioPage } from '../../pages/calendario/calendario';

/**
 * Generated class for the AñadirjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addjugadormodal',
  templateUrl: 'addjugadormodal.html',
})
export class AddjugadormodalPage {
  jugador: jugador = {
    nombre: '',
    email: '',
    casa:0,
    fuera:0,
    empate:0,
    ganado:0,
    perdidos:0,
    jugados:0,
    elo:0
    
  };

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase, private toastCtrl: ToastController) {
  }

  anadir(){
    this.afdb.list("/jugador/").push(this.jugador);
    this.navCtrl.setRoot(CalendarioPage);
    this.mostrar_mensaje("Jugador " + this.jugador.nombre + " añadido correctamente.");
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }

  volver(){
    this.navCtrl.setRoot(CalendarioPage);
  }
}
