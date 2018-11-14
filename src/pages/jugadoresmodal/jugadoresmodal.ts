import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces'; 
import { NumJugadoresProvider } from '../../providers/num-jugadores/num-jugadores';
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
  jugadores:Jugador[]=[];
  equipo:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,
              public numJugadores:NumJugadoresProvider) {
    this.jugadores=JUGADORES.slice(0);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JugadoresmodalPage');
    let data=this.navParams.get('equipo');
    this.equipo=data;
    console.log(this.numJugadores.numJugadores);
  }
  
  convocar(jugador){
    if(!jugador.juega){
      this.numJugadores.sumar_numJugadores;
      jugador.juega = true;

    }else if(jugador.juega){
      this.numJugadores.restar_numJugadores
      jugador.juega = false;
    }
  }
  volver(){
    this.viewCtrl.dismiss();
  }
}
