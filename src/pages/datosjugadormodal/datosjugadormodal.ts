import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { jugador } from '../../models/jugador';
import { equipo } from '../../models/equipo';

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
  jugador:jugador;
  equipo:equipo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public listajugadores:ListajugadoresProvider ) {
    let data=this.navParams.get('jugador');
    this.jugador=data;
    this.equipo = this.navParams.get('equipo');
  }

  ionViewDidLoad() {
   console.log(this.navParams.get('equipo'));
  }

}
