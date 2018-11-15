import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatosjugadormodalPage } from '../datosjugadormodal/datosjugadormodal'
import { AddjugadormodalPage } from '../addjugadormodal/addjugadormodal';
import { EditjugadormodalPage } from '../editjugadormodal/editjugadormodal';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {

  }

  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
  }
  
  mostrar_modal(jugador){
    let modal=this.modalCtrl.create(DatosjugadormodalPage,{jugador});
    modal.present();
  }

  mostrar_modal_anadir(){
    let modal=this.modalCtrl.create(AddjugadormodalPage, this.listajugadores.jugadores);
    modal.present();
  }

  mostrar_modal_editar(){
    let modal=this.modalCtrl.create(EditjugadormodalPage, this.listajugadores.jugadores);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
