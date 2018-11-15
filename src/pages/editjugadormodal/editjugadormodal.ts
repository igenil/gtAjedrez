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
  nom;
  eq;
  j;
  g;
  e;
  p;
  c;
  f;
  ptos;
  juega:boolean=false;
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
        this.listajugadores.jugadores[index]={nombre:this.nom,equipo:this.eq,j:this.j,g:this.g,e:this.e,p:this.p,c:this.c,f:this.f,ptos:this.ptos,juega:this.juega};
      }
      
    }
    this.viewCtrl.dismiss();
  }
}
