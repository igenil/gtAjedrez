import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';

/**
 * Generated class for the DatosjugadormodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datosjugadormodal',
  templateUrl: 'datosjugadormodal.html',
})
export class DatosjugadormodalPage {
  jugador:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public listajugadores:ListajugadoresProvider ) {

  }

  ionViewDidLoad() {
    let data=this.navParams.get('jugador');
    this.jugador=data;
  }

}
