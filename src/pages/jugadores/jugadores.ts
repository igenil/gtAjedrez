import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces';
import { EQUIPOS } from '../../data/data.equipos';
import { equipo } from '../../interface/equipo.interfaces';
import { DatosjugadormodalPage } from '../datosjugadormodal/datosjugadormodal'
import { AñadirjugadormodalPage } from '../añadirjugadormodal/añadirjugadormodal';

/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {
  jugadores:Jugador[]=[];
  equipos:equipo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth) {
    this.jugadores=JUGADORES.slice(0);
    this.equipos=EQUIPOS.slice(0);
  }
  signOut(): Promise<void> {
		return this.AfAuth.auth.signOut();
	}
  mostrar_modal(jugador){
    let modal=this.modalCtrl.create(DatosjugadormodalPage,{jugador});
    modal.present();
  }
  mostrar_modal_anadir(){
    let modal=this.modalCtrl.create(AñadirjugadormodalPage);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
