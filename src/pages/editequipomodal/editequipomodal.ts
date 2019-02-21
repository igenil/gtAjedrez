import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-editequipomodal',
  templateUrl: 'editequipomodal.html',
})
export class EditequipomodalPage {

  equipo:equipo;
  constructor(public viewCtrl:ViewController, private afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.equipo = this.navParams.get('equipo');
  }

  editarequipo(){
    this.afdb.list("/equipo").update(this.equipo.key, this.equipo)
    this.viewCtrl.dismiss();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditequipomodalPage');
  }

}
