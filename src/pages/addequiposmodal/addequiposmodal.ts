import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase } from 'angularfire2/database';
import { EquipoPage } from '../../pages/equipo/equipo';
/**
 * Generated class for the AddequiposmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addequiposmodal',
  templateUrl: 'addequiposmodal.html',
})
export class AddequiposmodalPage {
  equipo: equipo = {
    nombre: ''
  };

  constructor(private afdb: AngularFireDatabase, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  anadir(){
    this.afdb.list("/equipo/").push(this.equipo);
    this.navCtrl.setRoot(EquipoPage);
    this.mostrar_mensaje("Equipo " + this.equipo.nombre + " añadido correctamente.");
  }

  volver(){
    this.navCtrl.setRoot(EquipoPage);
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddequiposmodalPage');
  }

}
