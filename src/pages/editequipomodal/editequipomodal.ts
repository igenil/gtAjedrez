import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { equipo } from '../../models/equipo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
/**
 * Generated class for the EditequipomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
