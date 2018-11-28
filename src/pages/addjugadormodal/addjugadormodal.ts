import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
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
  nom:string;
  eq:string;
  j:number;
  g:number;
  e:number;
  p:number;
  c:number;
  f:number;
  juega:boolean=false;
  jugador:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public listajugadores:ListajugadoresProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AñadirjugadormodalPage');

    
  }
  anadirjugador(){
    this.jugador={nombre:this.nom,equipo:this.eq,j:Number(this.g)+Number(this.e)+Number(this.p),g:this.g,e:this.e,p:this.p,c:this.c,f:Number(this.g)+Number(this.e)+Number(this.p)-Number(this.c),ptos:Number(this.g)*3+Number(this.e),juega:this.juega};
    this.listajugadores.jugadores.push(this.jugador);
    this.listajugadores.jugadores.sort(function(a,b){ 
      if (Number(a.ptos)>Number(b.ptos)) {
        return -1;
      } else if(Number(a.ptos)<Number(b.ptos)){
        return 1;
      } else {
        return 0;
      }
    });
    this.viewCtrl.dismiss();
  }
}
