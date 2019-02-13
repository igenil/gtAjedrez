import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NumJugadoresProvider } from '../../providers/num-jugadores/num-jugadores';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { jugador } from '../../models/jugador';

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

  equipo:Array<jugador>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public numJugadores:NumJugadoresProvider, public listajugadores:ListajugadoresProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JugadoresmodalPage');

    this.equipo= this.navParams.get('listaJugadores');
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