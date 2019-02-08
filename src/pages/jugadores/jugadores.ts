import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  jugadores: Observable<jugador[]>;
  listaJugadores: AngularFireList<any>;

  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {
    
    this.listaJugadores = afdb.list("/jugador");
    this.jugadores =  this.listaJugadores.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
 
  }

  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
  }
  
  mostrar_modal(jugador){
    let modal=this.modalCtrl.create(DatosjugadormodalPage,{jugador});
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
    for (let index = 0; index < this.listajugadores.jugadores.length; index++) {
      if (this.listajugadores.jugadores[index].nombre==jugador.nombre) {
        this.listajugadores.jugadores.splice(index,1);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
