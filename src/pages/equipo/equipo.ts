import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EQUIPOS } from '../../data/data.equipos';
import { Equipo } from '../../interface/equipo.interfaces'; 
/**
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {
  equipos:Equipo[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipos=EQUIPOS.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

}
