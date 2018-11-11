import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
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
  jugador:any;
  nom;
  eq;
  j;
  g;
  e;
  p;
  c;
  f;
  ptos;
  jugadores:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.equipos=EQUIPOS.slice(0);
    this.jugadores=JUGADORES.slice(0);
    this.eq = "no definido";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirjugadormodalPage');
    //let data=this.navParams.get('jugadores');
    //this.jugadores=data;
    //console.log(JUGADORES);
    
  }
  anadirjugador(jugadores){
    this.jugador={nombre:this.nom,equipo:this.eq,j:this.j,g:this.g,e:this.e,p:this.p,c:this.c,f:this.f,ptos:this.ptos};
    console.log(this.jugador);
    //console.log(jugadores);
    jugadores.push(this.jugador);
    console.log(jugadores);
    this.viewCtrl.dismiss(jugadores);
  }
}
