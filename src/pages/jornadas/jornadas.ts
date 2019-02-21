import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListajornadasProvider } from '../../providers/listajornadas/listajornadas';
import { JornadasmodalPage } from '../jornadasmodal/jornadasmodal';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { jornadas } from '../../models/jornadas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalendariomodalPage } from '../calendariomodal/calendariomodal';
import firebase from 'firebase';
import { ListajugadoresProvider } from '../../providers/listajugadores/listajugadores';
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

  jornadas: Observable<jornadas[]>;
  listJornadas: AngularFireList<any>;
  admin: {};
  rolAdmin:boolean = false;
  rolCapitan:boolean = false;

  constructor(private prov: ListajugadoresProvider, private afdb: AngularFireDatabase, private modalCtrl:ModalController ,public navCtrl: NavController, public navParams: NavParams, public AfAuth: AngularFireAuth,public listajornadas:ListajornadasProvider) {
    
    this.listJornadas = afdb.list("/jornada");
    this.jornadas =  this.listJornadas.snapshotChanges().pipe(
       map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JornadasPage');
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

  mostrar_modal(jornada){
    let modal = this.modalCtrl.create(JornadasmodalPage,{jornada});
    modal.present();
  }
  
  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
	}

  anadirJornada(){
    let modal = this.modalCtrl.create(CalendariomodalPage);
    modal.present();
  }
}
