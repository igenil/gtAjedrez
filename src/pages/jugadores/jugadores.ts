import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces';
import { DatosjugadormodalPage } from '../datosjugadormodal/datosjugadormodal'
import { AddjugadormodalPage } from '../addjugadormodal/addjugadormodal';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {
    this.jugadores=listajugadores.capturarlista();
  }
  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
	}
  mostrar_modal(jugador){
    let modal=this.modalCtrl.create(DatosjugadormodalPage,{jugador});
    modal.present();
  }
  mostrar_modal_anadir(){
    let modal=this.modalCtrl.create(AddjugadormodalPage, this.jugadores);
    modal.onDidDismiss( parametros => {
      this.jugadores=parametros;
      })
     
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
