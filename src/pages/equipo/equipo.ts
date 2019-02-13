import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { JugadoresmodalPage } from '../jugadoresmodal/jugadoresmodal';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { AddequiposmodalPage } from '../../pages/addequiposmodal/addequiposmodal';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { equipo } from '../../models/equipo';
import { jugador } from '../../models/jugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { database } from 'firebase';
import { EditequipomodalPage } from '../editequipomodal/editequipomodal';

/**
 * Generated class for the EquipoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo',
  templateUrl: 'equipo.html',
})
export class EquipoPage {

  equipos: Observable<equipo[]>;
  listEquipos: AngularFireList<any>;
  jugadores: Array<jugador>;

  constructor(private toastCtrl: ToastController, private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {
    this.listEquipos = afdb.list("/equipo");
    this.equipos =  this.listEquipos.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
    
  }

  mostrar_modal_anadir(){
    let modal=this.modalCtrl.create(AddequiposmodalPage, this.listajugadores.jugadores);
    modal.present();
  }

  mostrar_modal(equipo){
    var jugadoresequipo = this.afdb.list('/jugador', ref => ref.orderByChild('equipo').equalTo(equipo.key)).valueChanges();
    console.log(jugadoresequipo);
    let modal=this.modalCtrl.create(JugadoresmodalPage,{'listaJugadores':jugadoresequipo});
    modal.present();
  }

  mostrar_modal_editar(equipo){
    let modal=this.modalCtrl.create(EditequipomodalPage, {'equipo':equipo});
    modal.present();
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
  
  eliminar_equipo(equipo){
    var id = equipo.key;
    console.log(equipo.key);
    this.afdb.database.ref('/equipo/'+ equipo.key).remove();
    this.mostrar_mensaje("Equipo " + equipo.nombre + " elimanado con exito.");
  }

  signOut(): Promise<void> {
		return this.AfAuth.auth.signOut();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

}
