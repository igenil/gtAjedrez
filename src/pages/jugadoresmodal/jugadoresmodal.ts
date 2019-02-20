import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NumJugadoresProvider } from '../../providers/num-jugadores/num-jugadores';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { jugador } from '../../models/jugador';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { JUGADORES } from '../../data/data.jugadores';
import firebase from 'firebase';

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
  rolAdmin: boolean;
  rolCapitan:boolean = false;
  Nconvocados:Number;
  convocados: any = [];

  constructor(private prov: ListajugadoresProvider,private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public numJugadores:NumJugadoresProvider, public listajugadores:ListajugadoresProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresmodalPage');
    
    this.equipo= this.navParams.get('listaJugadores');
    let key = this.navParams.get('keyEquipo');
    console.log(key); 

    this.listajugadores.Covocados(key).then(existe =>{
      if(existe) {
          console.log(this.prov.convocados); 
      }
    })

      

    var user = firebase.auth().currentUser;
    this.prov.verificarUsuario(user.email).then(existe =>{
      if(existe) {
        if (this.prov.admin[0].admin) {
          this.rolAdmin = true;
        }
      }if(this.prov.admin[0].capitan){
          this.rolCapitan = true;
      }
    })
  }
  
  convocar(jugador){
    if(!jugador.juega){
      jugador.juega  = true;
      this.afdb.list("/jugador").update(jugador.key, jugador);
    }else if(jugador.juega){
      jugador.juega  = false;
      this.afdb.list("/jugador").update(jugador.key, jugador);
    }
  }
  volver(){
    this.viewCtrl.dismiss();
  }
}