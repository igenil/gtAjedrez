import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { equipo } from '../../models/equipo';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-addequiposmodal',
  templateUrl: 'addequiposmodal.html',
})
export class AddequiposmodalPage {
  equipo: equipo = {
    nombre: ''
  };

  constructor( public viewCtrl: ViewController,private afdb: AngularFireDatabase, private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  anadir(){
    this.afdb.list("/equipo/").push(this.equipo);
    this.viewCtrl.dismiss();
    this.mostrar_mensaje("Equipo " + this.equipo.nombre + " añadido correctamente.");
  }

  volver(){
    this.viewCtrl.dismiss();
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
