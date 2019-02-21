import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import firebase from 'firebase';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-capitanes',
  templateUrl: 'capitanes.html',
})
export class CapitanesPage {
  listEquipos: Observable<any>;
  capitanes: Observable<any>;
  admin: Observable<any>;
  rolAdmin: boolean;
  rolCapitan:boolean = false;

  constructor(private prov: ListajugadoresProvider, public AfAuth: AngularFireAuth, public navCtrl: NavController, private afdb: AngularFireDatabase, private modalCtrl: ModalController, public navParams: NavParams) {
    this.capitanes = this.afdb.list('/jugador', ref => ref.orderByChild('capitan').equalTo(true)).valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapitanesPage');
    var user = firebase.auth().currentUser;
    this.prov.verificarUsuario(user.email).then(existe =>{
      if(existe) {
        if (this.prov.admin[0].admin) {
          this.rolAdmin = true;
        }
      }else if(this.prov.admin[0].capitan){
          this.rolCapitan = true;
      }
    })
  }

  signOut(): Promise<void> {
		return this.AfAuth.auth.signOut();
  }

  destituir(capitan){
    capitan.capitan=false;
    this.afdb.list("/jugador").update(capitan.key, capitan);
  }
}
