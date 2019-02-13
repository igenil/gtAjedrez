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

  equipos: Observable<equipo[]>;
  listEquipos: AngularFireList<any>;

  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,  public listajugadores:ListajugadoresProvider) {
    let data=this.navParams.get('jugador');
    this.jugador=data;

    this.listEquipos = afdb.list("/equipo");
    this.equipos =  this.listEquipos.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
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
