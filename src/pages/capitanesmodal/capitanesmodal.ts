import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the CapitanesmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capitanesmodal',
  templateUrl: 'capitanesmodal.html',
})
export class CapitanesmodalPage {
  listEquipos: Observable<any>;
  capitan: Observable<any>;
  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesmodalPage');
    this.listEquipos= this.navParams.get('listEquipos');
    this.capitan= this.navParams.get('capitan');
  }


  asignar(jugador){
    if(!jugador.capitan){
      jugador.capitan  = true;
      this.afdb.list("/jugador").update(jugador.capitan, jugador);
    }else if(jugador.capitan){
      jugador.capitan  = false;
      this.afdb.list("/jugador").update(jugador.capitan, jugador);
    }
  }
  volver(){
    this.viewCtrl.dismiss();
  }
}
