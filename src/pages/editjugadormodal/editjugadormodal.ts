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
  // nombre;
  // email;
  // casa;
  // fuera;
  // empate;
  // ganado;
  // perdidos;
  // jugados;
  // elo;
  // capitan;
  // admin;
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
    // this.jugador.nombre=this.nombre;
    // this.jugador.email=this.email;
    // this.jugador.casa=this.casa;
    // this.jugador.fuera=this.fuera;
    // this.jugador.empate=this.empate;
    // this.jugador.ganado=this.ganado;
    // this.jugador.perdidos=this.perdidos;
    // this.jugador.jugados=this.jugados;
    // this.jugador.elo=this.elo;
    // this.jugador.capitan=this.capitan;
    // this.jugador.admin= this.admin;
    console.log("antes de editar: "+this.jugador);
    this.afdb.list("/jugador").update(this.jugador.key, this.jugador)
    console.log("desues de editar: "+this.jugador);
    this.viewCtrl.dismiss();
    
  }
}
