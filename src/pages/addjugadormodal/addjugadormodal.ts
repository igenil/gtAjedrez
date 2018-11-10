import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EQUIPOS } from '../../data/data.equipos';
import { JUGADORES } from '../../data/data.jugadores';
import { Equipo } from '../../interface/equipo.interfaces';
import { Jugador } from '../../interface/jugador.interfaces';


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
  equipos:Equipo[]=[];
  nom;
  eq;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipos=EQUIPOS.slice(0);
    this.eq = "no definido";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirjugadormodalPage');
  }
  anadirjugador(){
    console.log("Nombre: " + this.nom + " Equipo: " + this.eq);
    JUGADORES.push(this.nom,this.eq,null,null,null,null,null,null,null);
    console.log(JUGADORES.join())
    this.navCtrl.pop();
  }
}
