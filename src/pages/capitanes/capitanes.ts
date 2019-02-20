import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CapitanesmodalPage } from '../capitanesmodal/capitanesmodal';


@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {
  listEquipos: AngularFireList<any>;

  constructor(public navCtrl: NavController, private afdb: AngularFireDatabase, private modalCtrl: ModalController, public navParams: NavParams) {
    var capitanes = this.afdb.list('/jugador', ref => ref.orderByChild('capitan'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
  }

  mostrar_modal(){
    this.listEquipos = this.afdb.list("/equipo");
    let modal=this.modalCtrl.create(CapitanesmodalPage,{'listEquipos':this.listEquipos});
    modal.present();
  }
}
