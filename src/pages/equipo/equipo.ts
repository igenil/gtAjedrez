import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EQUIPOS } from '../../data/data.equipos';
import { Equipo } from '../../interface/equipo.interfaces'; 
import { JugadoresmodalPage } from '../jugadoresmodal/jugadoresmodal';
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
  equipos:Equipo[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, public AfAuth: AngularFireAuth) {
    this.equipos=EQUIPOS.slice(0);
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
