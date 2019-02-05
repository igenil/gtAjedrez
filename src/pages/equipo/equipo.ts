import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { JugadoresmodalPage } from '../jugadoresmodal/jugadoresmodal';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { AddequiposmodalPage } from '../../pages/addequiposmodal/addequiposmodal';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { equipo } from '../../models/equipo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth, public listajugadores:ListajugadoresProvider) {
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
    let modal=this.modalCtrl.create(JugadoresmodalPage,{equipo});
    modal.present();
  }

  signOut(): Promise<void> {
		return this.AfAuth.auth.signOut();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPage');
  }

}
