import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces';

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
  jugadores:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController ) {
    this.jugadores=JUGADORES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosjugadormodalPage');
  }

}
