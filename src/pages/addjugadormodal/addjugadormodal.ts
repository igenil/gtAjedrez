import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
import { EQUIPOS } from '../../data/data.equipos';
import { JUGADORES } from '../../data/data.jugadores';
import { Equipo } from '../../interface/equipo.interfaces';
import { Jugador } from '../../interface/jugador.interfaces';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';


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
  nom;
  eq;
  j;
  g;
  e;
  p;
  c;
  f;
  ptos;
  jugador:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirjugadormodalPage');

    
  }
  anadirjugador(){
    this.jugador={nombre:this.nom,equipo:this.eq,j:this.j,g:this.g,e:this.e,p:this.p,c:this.c,f:this.f,ptos:this.ptos};
    this.listajugadores.jugadores.push(this.jugador);
    this.viewCtrl.dismiss();
  }
}
