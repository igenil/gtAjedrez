import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CapitanesmodalPage } from '../capitanesmodal/capitanesmodal';
import { Observable } from 'rxjs';


@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {
  listEquipos: Observable<any>;
  capitanes: Observable<any>;

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase, private modalCtrl: ModalController, public navParams: NavParams) {
    this.capitanes = this.afdb.list('/jugador', ref => ref.orderByChild('capitan').equalTo(true)).valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
  }

  mostrar_modal(capitan){
    this.listEquipos = this.afdb.list("/equipo").valueChanges();
    let modal=this.modalCtrl.create(CapitanesmodalPage,{'listEquipos':this.listEquipos, 'capitan':capitan});
    modal.present();
  }
}
