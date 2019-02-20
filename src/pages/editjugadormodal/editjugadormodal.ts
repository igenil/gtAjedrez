import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { jugador } from '../../models/jugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { equipo } from '../../models/equipo';

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
  nombre:string;
  email:string;
  casa:number;
  fuera:number;
  empate:number;
  ganado:number;
  perdidos:number;
  jugados:number;
  elo:number;
  capitan:boolean;
  admin:boolean;
  equipo:string;
  juega:boolean;

  equipos: Observable<equipo[]>;
  listEquipos: AngularFireList<any>;

  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,  public listajugadores:ListajugadoresProvider) {
    let data=this.navParams.get('jugador');
    this.jugador=data;

    this.listEquipos = afdb.list("/equipo");
    this.equipos =  this.listEquipos.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  ionViewDidLoad() {
    
  }

  editarjugador(){
    console.log(this.jugador.key);
    this.jugador.elo = Number(this.jugador.elo);
    console.log(typeof(this.jugador.elo));
    this.afdb.list("/jugador").update(this.jugador.key, this.jugador);
    this.viewCtrl.dismiss();
    console.log(this.jugador);
    console.log("t");
    
  }
}
