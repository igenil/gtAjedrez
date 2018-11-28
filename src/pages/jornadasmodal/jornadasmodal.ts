import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
/**
 * Generated class for the JornadasmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadasmodal',
  templateUrl: 'jornadasmodal.html',
})
export class JornadasmodalPage {
  jornada:any={};
  titular1 = 0
  titular2= 0
  titular3 = 0
  titular4 = 0
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasmodalPage');
    let data=this.navParams.get('jornada');
    this.jornada=data;
  }
  gana(jugador, n_titular){
    if(n_titular==1){

      this.jornada.n_titular1 = 1
    }else if(n_titular==2){

      this.jornada.n_titular2 = 1
    }else if(n_titular==3){
      jugador.j += 1
      jugador.g += 1
      jugador.ptos = (jugador.g * 3) + (jugador.e)
      this.titular3 = 1
    }else if(n_titular==4){
      jugador.j += 1
      jugador.g += 1
      jugador.ptos = (jugador.g * 3) + (jugador.e)
      this.titular4 = 1
    }
  }
  empata(){

  }
  pierde(){

  }
}
