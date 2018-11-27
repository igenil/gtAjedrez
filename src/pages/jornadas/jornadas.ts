import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { JornadasmodalPage } from '../jornadasmodal/jornadasmodal';

/**
 * Generated class for the JornadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornadas',
  templateUrl: 'jornadas.html',
})
export class JornadasPage {

  constructor(private modalCtrl:ModalController ,public navCtrl: NavController, public navParams: NavParams, public AfAuth: AngularFireAuth,public listajornadas:ListajornadasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasPage');
  }
  mostrar_modal(jornada){
    let modal = this.modalCtrl.create(JornadasmodalPage,{jornada});
    modal.present();
  }
  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
	}

}
