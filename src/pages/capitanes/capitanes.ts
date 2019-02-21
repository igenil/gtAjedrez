import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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

  destituir(capitan){
    capitan.capitan=false;
    this.afdb.list("/jugador").update(capitan.key, capitan);
  }
}
