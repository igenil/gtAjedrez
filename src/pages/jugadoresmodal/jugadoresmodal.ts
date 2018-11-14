import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces'; 
import { NumJugadoresProvider } from '../../providers/num-jugadores/num-jugadores';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
/**
 * Generated class for the JugadoresmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadoresmodal',
  templateUrl: 'jugadoresmodal.html',
})
export class JugadoresmodalPage {

  equipo:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public numJugadores:NumJugadoresProvider, public listajugadores:ListajugadoresProvider) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JugadoresmodalPage');
    let data=this.navParams.get('equipo');
    this.equipo=data;
  }
  
  convocar(jugador){
    if(!jugador.juega){
      this.numJugadores.sumar_numJugadores();
      jugador.juega = true;
      console.log(this.numJugadores.numJugadores);

    }else if(jugador.juega){
      this.numJugadores.restar_numJugadores()
      jugador.juega = false;
      console.log(this.numJugadores.numJugadores);
    }
  }
  volver(){
    this.viewCtrl.dismiss();
  }
}
