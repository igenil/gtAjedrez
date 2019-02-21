import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
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

  constructor(private prov: ListajugadoresProvider,private toastCtrl: ToastController, private afdb: AngularFireDatabase, private modalCtrl:ModalController ,public navCtrl: NavController, public navParams: NavParams, public AfAuth: AngularFireAuth,public listajornadas:ListajornadasProvider) {
    
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
    var equipo = this.afdb.list('/equipo', ref => ref.orderByKey().equalTo(jornada.equipo)).valueChanges();
    var titular1 = this.afdb.list('/jugador', ref => ref.orderByChild('email').equalTo(jornada.titular1)).valueChanges();
    var titular2 = this.afdb.list('/jugador', ref => ref.orderByChild('email').equalTo(jornada.titular2)).valueChanges();
    var titular3 = this.afdb.list('/jugador', ref => ref.orderByChild('email').equalTo(jornada.titular3)).valueChanges();
    var titular4 = this.afdb.list('/jugador', ref => ref.orderByChild('email').equalTo(jornada.titular4)).valueChanges();
    var titular5 = this.afdb.list('/jugador', ref => ref.orderByChild('email').equalTo(jornada.titular5)).valueChanges();
    let modal = this.modalCtrl.create(JornadasmodalPage,{jornada, equipo, titular1, titular2, titular3, titular4, titular5});
    modal.present();
  }
  
  signOut(): Promise<void> {
    return this.AfAuth.auth.signOut();
	}

  mostrar_modal_add(){
    let modal = this.modalCtrl.create(CalendariomodalPage);
    modal.present();
  }

  eliminar(jornada){
    var id = jornada.key;
    this.mostrar_mensaje("Jornada  eliminada con exito.");
    this.afdb.database.ref('/jornada/'+ jornada.key).remove();
  }

  mostrar_mensaje( mensaje:string ){
    let toast = this.toastCtrl.create({
    message: mensaje,
    duration: 3500,
    cssClass: "toast"
    });
    toast.present();
   }
}
