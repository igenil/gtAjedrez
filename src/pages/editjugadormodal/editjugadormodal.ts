import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';

/**
 * Generated class for the EditjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editjugadormodal',
  templateUrl: 'editjugadormodal.html',
})
export class EditjugadormodalPage {

  jugador:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,  public listajugadores:ListajugadoresProvider) {
  }

  ionViewDidLoad() {
    let data=this.navParams.get('jugador');
    this.jugador=data;
    console.log('ionViewDidLoad EditjugadormodalPage');
  }

  editarjugador(){
    for (let index = 0; index < this.listajugadores.jugadores.length; index++) {
      if (this.listajugadores.jugadores[index].nombre==this.jugador.nombre) {
        this.listajugadores.jugadores[index]=this.jugador
      }
      
    }
    this.viewCtrl.dismiss();
  }
}
