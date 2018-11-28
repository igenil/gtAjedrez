import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
 console.log(listajugadores.jugadores);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JugadoresmodalPage');
    let data=this.navParams.get('equipo');
    this.equipo=data;
  }
  
  convocar(jugador, equipo){
    if(!jugador.juega){
      equipo.convocados+=1;
      console.log(equipo.convocados)
      jugador.juega = true;

    }else if(jugador.juega, equipo){
      equipo.convocados-=1;
      console.log(equipo.convocados)
      jugador.juega = false;
    }
  }
  volver(){
    this.viewCtrl.dismiss();
  }
}