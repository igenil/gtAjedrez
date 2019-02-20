import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatosjugadormodalPage } from '../datosjugadormodal/datosjugadormodal'
import { EditjugadormodalPage } from '../editjugadormodal/editjugadormodal';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { jugador } from '../../models/jugador';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  jugadores: Observable<any>;
  listaJugadores: AngularFireList<any>;

  constructor(private toastCtrl: ToastController, private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {
    
    this.listaJugadores = afdb.list("/jugador", ref => ref.orderByChild('elo'));
    this.jugadores = this.listaJugadores.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
   );;

  }

  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }

  mostrar_modal(jugador){
    var equipo = this.afdb.list('/equipo', ref => ref.orderByKey().equalTo(jugador.equipo)).valueChanges();
    let modal=this.modalCtrl.create(DatosjugadormodalPage,{'jugador':jugador,'equipo':equipo});
    modal.present();
  }
  
  mostrar_modal_editar(jugador){
    let modal=this.modalCtrl.create(EditjugadormodalPage, {'jugador':jugador});
    modal.present();
  }

  hacer_capitan(jugador){
    jugador.capitan=true;
    this.afdb.list("/jugador").update(jugador.key, jugador);
  }

  eliminar_jugador(jugador){
    var id = jugador.key;
    console.log(jugador.key);
    this.afdb.database.ref('/jugador/'+ jugador.key).remove();
    this.mostrar_mensaje("Jugador " + jugador.nombre + " elimanado con exito.");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
