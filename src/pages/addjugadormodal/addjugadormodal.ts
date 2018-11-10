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
  jugador:{}={};
  nom;
  eq;
  jugadores:[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.equipos=EQUIPOS.slice(0);
    this.eq = "no definido";
    this.jugadores=this.navParams.get('jugadores');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirjugadormodalPage');
    
  }
  anadirjugador(){
    //this.jugador={nombre:this.nom,equipo:this.eq,j:null,g:null,e:null,p:null,c:null,f:null,ptos:null}
    //this.jugadores.push(this.jugador);
    //console.log(this.jugadores.join())
    //this.navCtrl.pop(this.jugadores);
  }
}
