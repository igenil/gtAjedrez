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
        this.listajugadores.jugadores[index]=this.jugador;
        this.listajugadores.jugadores[index].j=Number(this.jugador.g)+Number(this.jugador.e)+Number(this.jugador.p)
        this.listajugadores.jugadores[index].f=Number(this.jugador.g)+Number(this.jugador.e)+Number(this.jugador.p)-Number(this.jugador.c)
        this.listajugadores.jugadores[index].ptos=Number(this.jugador.g)*3+Number(this.jugador.e)
        this.listajugadores.jugadores.sort(function(a,b){ 
          if (Number(a.ptos)>Number(b.ptos)) {
            return -1;
          } else if(Number(a.ptos)<Number(b.ptos)){
            return 1;
          } else {
            return 0;
          }
        });
      }
      
    }
    this.viewCtrl.dismiss();
  }
}
