import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { JUGADORES } from '../../data/data.jugadores';
import { Jugador } from '../../interface/jugador.interfaces'; 

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
  cont:number= 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.jugadores=JUGADORES.slice(0);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad JugadoresmodalPage');
    let data=this.navParams.get('equipo');
    this.equipo=data;
    console.log(this.cont)
  }
  convocar(jugador){
    if(!jugador.juega){
      this.cont+=1;
      jugador.juega = true;
      console.log(this.cont);
    }else if(jugador.juega){
      this.cont-=1;
      jugador.juega = false;
      console.log(this.cont)
    }
  }
  volver(){
    this.viewCtrl.dismiss(this.cont);
  }
}
