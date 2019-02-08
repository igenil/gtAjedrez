import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { AngularFireDatabase } from "angularfire2/database";
import { jugador } from '../../models/jugador';
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
  jugador:jugador;
  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,  public listajugadores:ListajugadoresProvider) {
    let data=this.navParams.get('jugador');
    this.jugador=data;
    console.log(this.jugador);
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad EditjugadormodalPage');
  }

  editarjugador(){
    this.afdb.list("/jugador").update(this.jugador.key, this.jugador)
    this.viewCtrl.dismiss();
    
  }
}
